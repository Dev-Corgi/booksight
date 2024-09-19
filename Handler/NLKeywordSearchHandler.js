export default async function NLKeywordSearchHandler(kwd) {
  async function fetchNLKeywordSearch(kwd) {
    try {
      const response = await fetch(`/api/NLKeywordSearch?kwd=${kwd}`);

      if (!response.ok) {
        throw new Error("Failed to fetch isRentPossible");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  function extractText(data) {
    // 정규식을 사용하여 <span> 태그 제거
    const regex = /<span class="searching_txt">(.*?)<\/span>/g;
    return data.replace(regex, "$1");
  }

  const NLKeywordSearchResult = await fetchNLKeywordSearch(kwd);
  console.log(NLKeywordSearchResult.result);
  if(!NLKeywordSearchResult.result){return undefined}
  const result = NLKeywordSearchResult.result.map((item, index) => {
    return {
      title: extractText(item.titleInfo),
      author: item.authorInfo,
      isbn: item.isbn,
    };
  });
  return result;
}
