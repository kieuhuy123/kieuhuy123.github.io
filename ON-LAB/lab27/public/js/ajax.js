// export default function (method, uri, body, onsuccess) {
//   const xhr = new XMLHttpRequest();

//   xhr.responseType = "json";
//   xhr.open(method, uri);

//   xhr.onerror = () => console.log("Cannot send request");

//   xhr.onload = () => {
//     let header = xhr.getAllResponseHeaders;
//     let data = xhr.response;

//     onsuccess(header, data);
//   };

//   xhr.send(body);
// }

let parseLink = (link) => {
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
// export 
export default function ({ method, uri, body, onerror, onsuccess }) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.open(method, uri);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onerror = onerror ? onerror : () => console.log("Cannot send request");

  xhr.onload = () => {
    // pagination
    let link = xhr.getResponseHeader("link");

    if (link) {
      link = link.split(", ").map((l) => parseLink(l));
      link = Object.assign({}, ...link);
    }
    let total = xhr.getResponseHeader("x-total-count");
    //data
    onsuccess({
      link,
      total,
      data: xhr.response,
    });
  };

  xhr.send(body);
}

