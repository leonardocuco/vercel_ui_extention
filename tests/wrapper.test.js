import { test } from 'node:test';
import assert from 'node:assert';
import { useInstrumentedChat, highlightLinks } from '../dist/index.js';
import { lastOptions } from '@vercel/ai/react';

function createLink(href) {
  return {
    href,
    classList: {
      classes: [],
      add(cls) { this.classes.push(cls); }
    }
  };
}

function createDocument() {
  const links = [
    createLink('https://example.com/foo'),
    createLink('https://example.com/bar'),
    createLink('https://example.com/foo?a=1')
  ];
  return {
    head: {
      children: [],
      appendChild(node) { this.children.push(node); }
    },
    getElementById(id) { return null; },
    createElement(tag) { return { id: '', textContent: '' }; },
    querySelectorAll(sel) { return links; },
    _links: links
  };
}

test('highlightLinks adds class to matching anchors', () => {
  const doc = createDocument();
  global.document = doc;
  const result = highlightLinks({ path: '/foo' });
  assert.equal(result, 'links highlighted');
  assert.deepEqual(doc._links[0].classList.classes, ['instrument-highlight']);
  assert.deepEqual(doc._links[1].classList.classes, []);
  assert.deepEqual(doc._links[2].classList.classes, ['instrument-highlight']);
  delete global.document;
});

test('useInstrumentedChat invokes registered handler', async () => {
  const doc = createDocument();
  global.document = doc;
  useInstrumentedChat();
  const { onToolCall } = lastOptions;
  const res = await onToolCall({ toolName: 'highlightLinks', args: { path: '/foo' } });
  assert.equal(res, 'links highlighted');
  assert.deepEqual(doc._links[0].classList.classes, ['instrument-highlight']);
  delete global.document;
});

