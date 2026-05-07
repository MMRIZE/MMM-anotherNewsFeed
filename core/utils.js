/**
 * Returns true if the given URL points to an image file, or if the MIME type
 * contains "image".
 * @param {string} url
 * @param {string|null} type - optional MIME type
 * @returns {boolean}
 */
function isImage (url, type = null) {
	if (type && type.search("image") > -1) {
		return true;
	}
	return (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(url);
}

/**
 * Extracts the first image URL from a parsed feed item.
 * Checks (in order): Atom link array, enclosure, media:content, inline <img> tags.
 * @param {object} item - parsed feed item
 * @returns {string|null}
 */
function extractImageFromItem (item) {
	const images = [];

	if (Array.isArray(item?.link)) {
		for (const link of item.link) {
			if (isImage(link?.href ?? "")) images.push(link.href);
		}
	}

	if (isImage(item?.enclosure?.url, item?.enclosure?.type)) {
		images.push(item.enclosure.url);
	}

	if (isImage(item?.["media:content"]?.url, item?.["media:content"]?.type)) {
		images.push(item["media:content"].url);
	}

	const thumbnail = Array.isArray(item?.["media:thumbnail"])
		? item["media:thumbnail"][0]
		: item?.["media:thumbnail"];
	if (thumbnail?.url && isImage(thumbnail.url, "image")) {
		images.push(thumbnail.url);
	}

	const contentToCheck = [
		item?.description,
		item?.content,
		item?.[":content:encoded"],
		item?.["content:encoded"]
	].filter(Boolean);

	for (const content of contentToCheck) {
		const regex = /<img[^>]+src=["']([^"'>]+)["']/g;
		let match;
		while ((match = regex.exec(content))) {
			images.push(match[1]);
		}
	}

	return images[0] ?? null;
}

module.exports = { isImage, extractImageFromItem };
