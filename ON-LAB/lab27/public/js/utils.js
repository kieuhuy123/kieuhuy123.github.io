export default (link) => {
  // link

  let slash = link.lastIndexOf("?");
  let gte = link.lastIndexOf(">");

  let href = link.slice(slash, gte);
  // console.log(href);
  let quote1 = Number(link.indexOf('"') + 1);
  let quote2 = link.indexOf('"', quote1);
  let rel = link.slice(quote1, quote2);

  return { [rel]: href };
};
