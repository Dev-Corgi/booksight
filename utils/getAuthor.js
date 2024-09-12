export default function getAuthor(author) {
    const authorInput = author;
    const pattern = /^(.*?)\s*\(지은이\)/;
    const match = authorInput.match(pattern);

    return match ? match[1] : author;
}