import { CSSProperties } from "react";
import { Position } from "reactflow";

export interface MyNodeData {
  index?: number;
  label?: string;           
  latinName?: string;       
  dateOfOrigin?: string;    
  whoDidItComeFrom?: string;
  whoAroseFromHim?: string;
  didHeComeOutOfAfrica?: string;
  imgPath?: string;
  imgSource?: string;
  imgAuthor?: string;
  handleOptions?: {
    top?: {
      type: string;
      position: Position;
    };
    bottom?: {
      type: string;
      position: Position;
    };
    right?: {
      type: string;
      position: Position;
    };
    left?: {
      type: string;
      position: Position;
    };
  };
}

export interface MyEdgeData {
  label?: string;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
}

export interface CardPosition {
  x: number;
  y: number;
}

export interface HandleOption {
  type: 'source' | 'target';
  position: 'top' | 'bottom' | 'left' | 'right';
}

export interface HandleOptions {
  top?: HandleOption;
  bottom?: HandleOption;
  left?: HandleOption;
  right?: HandleOption;
}

export interface CardData {
  labelKey: string;
  latinNameKey: string;
  dateOfOriginKey: string;
  whoDidItComeFromKey: string;
  whoAroseFromHimKey?: string;
  didHeComeOutOfAfricaKey?: string | null;
  imgPath: string;
  imgSource: string;
  infoSource: string;
  imgAuthor: string;
  handleOptions: HandleOptions;
}

export interface Card {
  id: string;
  position: CardPosition;
  data: CardData;
}
