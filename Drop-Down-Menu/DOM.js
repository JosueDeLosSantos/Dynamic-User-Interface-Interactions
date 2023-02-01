// append multiple options to selectedTag
export function appendOptions(selectedTag, array) {
  array.forEach((element) => {
    const optionsFactory = document.createElement("li");
    const linksFactory = document.createElement("a");
    optionsFactory.classList.add("add-optionsLi");
    optionsFactory.appendChild(linksFactory);
    linksFactory.innerText = `${element}`;
    return selectedTag.appendChild(optionsFactory);
  });
}

// append single options to selectClass tag
export function appendOption(selectClass, option) {
  const optionMaker = document.createElement("option");
  optionMaker.classList.add("auto");
  optionMaker.setAttribute("value", `${option}`);
  optionMaker.innerText = `${option}`;
  return selectClass.appendChild(optionMaker);
}
