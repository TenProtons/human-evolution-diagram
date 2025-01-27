export interface MyNodeData {
  index?: number;
  id?: string;
  label: string;
  latinName: string;
  dateOfOrigin: string;
  whoDidItComeFrom: string;
  whoAroseFromHim: string;
  didHeComeOutOfAfrica: string;
  imgUrl: string;
  imgSource: string;
  imgAuthor: string;
}

export interface MyEdgeData {
  label?: string;
}