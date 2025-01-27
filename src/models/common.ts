import { CSSProperties } from "react";
import { Position } from "reactflow";

export interface MyNodeData {
  index?: number;
  // 'id' not needed if you're passing it to Node
  label?: string;            // optional
  latinName?: string;        // optional
  dateOfOrigin?: string;     // optional
  whoDidItComeFrom?: string; // optional
  whoAroseFromHim?: string;
  didHeComeOutOfAfrica?: string;
  imgUrl?: string;
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
