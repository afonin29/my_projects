import { createElement } from '../helpers/domHelper';
import { getFighterInfo } from './fighterSelector';
import { fightersDetails, fighters } from '../helpers/mockData';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });
  
  let selectedFighter = fightersDetails.find((it) => it.name === fighter);
  let selectedId;
  if (selectedFighter) {
    selectedId = selectedFighter._id;
  }

  let getInfo = getFighterInfo(selectedId);

  if (getInfo !== undefined) {fighterElement.innerText = getInfo;} else {fighterElement.innerText = ''}


  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
