import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isImage, extractImageFromItem } from "../core/utils.js";

describe("isImage", () => {
	it("returns true for image MIME type", () => {
		assert.equal(isImage("anything", "image/jpeg"), true);
	});

	it("returns true for image extension", () => {
		for (const ext of ["jpg", "jpeg", "png", "gif", "webp", "bmp", "tiff"]) {
			assert.equal(isImage(`http://example.com/photo.${ext}`), true, ext);
		}
	});

	it("returns false for non-image URL without type", () => {
		assert.equal(isImage("http://example.com/article"), false);
	});

	it("returns false for non-image MIME type", () => {
		assert.equal(isImage("http://example.com/audio.mp3", "audio/mpeg"), false);
	});
});

describe("extractImageFromItem", () => {
	it("returns null when no image present", () => {
		assert.equal(extractImageFromItem({ title: "No image" }), null);
	});

	it("extracts image from enclosure with image MIME type", () => {
		const item = { enclosure: { url: "http://example.com/photo.jpg", type: "image/jpeg" } };
		assert.equal(extractImageFromItem(item), "http://example.com/photo.jpg");
	});

	it("extracts image from enclosure with image extension (no type)", () => {
		const item = { enclosure: { url: "http://example.com/photo.png" } };
		assert.equal(extractImageFromItem(item), "http://example.com/photo.png");
	});

	it("ignores enclosure with non-image MIME type", () => {
		const item = { enclosure: { url: "http://example.com/audio.mp3", type: "audio/mpeg" } };
		assert.equal(extractImageFromItem(item), null);
	});

	it("extracts image from media:content", () => {
		const item = { "media:content": { url: "http://example.com/media.png" } };
		assert.equal(extractImageFromItem(item), "http://example.com/media.png");
	});

	it("extracts image from Atom link array", () => {
		const item = {
			link: [
				{ href: "http://example.com/article", type: "text/html" },
				{ href: "http://example.com/image.gif" }
			]
		};
		assert.equal(extractImageFromItem(item), "http://example.com/image.gif");
	});

	it("extracts image from inline <img> tag in description", () => {
		const item = { description: '<p>Text <img src="http://example.com/inline.jpg" alt=""> more</p>' };
		assert.equal(extractImageFromItem(item), "http://example.com/inline.jpg");
	});

	it("extracts image from content:encoded", () => {
		const item = { "content:encoded": '<img src="http://example.com/encoded.jpg">' };
		assert.equal(extractImageFromItem(item), "http://example.com/encoded.jpg");
	});

	it("prefers enclosure over inline img", () => {
		const item = {
			enclosure: { url: "http://example.com/enclosure.jpg", type: "image/jpeg" },
			description: '<img src="http://example.com/inline.jpg">'
		};
		assert.equal(extractImageFromItem(item), "http://example.com/enclosure.jpg");
	});
});
