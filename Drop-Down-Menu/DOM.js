// append options to selectedTag tags
export function appendOption(selectedTag, array) {
  array.forEach((element) => {
    const optionsFactory = document.createElement("li");
    const linksFactory = document.createElement("a");
    optionsFactory.classList.add("add-optionsLi");
    optionsFactory.appendChild(linksFactory);
    linksFactory.innerText = `${element}`;
    return selectedTag.appendChild(optionsFactory);
  });
}
