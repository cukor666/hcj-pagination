const ulTag = document.querySelector("ul");

let totalPages = 7;

function elementDefault(totalPages, page) {
  if (totalPages == 0) {
    ulTag.innerHTML = `<li><span>没有数据</span></li>`;
    return;
  }
  let liTag = "";
  if (page > 1 && totalPages > 1) {
    liTag += `<li class="btn prev" onclick="element(totalPages, ${
      page - 1
    })"><span>上一页</span></li>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i == page) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${i})"><span>${i}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages, ${
      page + 1
    })"><span>下一页</span></li>`;
  }

  ulTag.innerHTML = liTag;
}

function element(totalPages, page) {
  if (totalPages < 6) {
    return elementDefault(totalPages, page);
  }
  let liTag = "";
  let beforePages = page - 1;
  let afterPages = page + 1;
  let activeLi;
  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(totalPages, ${
      page - 1
    })"><span>上一页</span></li>`;
  }

  if (page > 2) {
    liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots">...</li>`;
    }
  }

  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }

  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let i = beforePages; i <= afterPages; i++) {
    if (i > totalPages || i < 1) {
      continue;
    }

    if (i == page) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${i})"><span>${i}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots">...</li>`;
    }
    liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages, ${
      page + 1
    })"><span>下一页</span></li>`;
  }
  ulTag.innerHTML = liTag;
}

element(totalPages, 5);
