import {  ITag } from "office-ui-fabric-react";

export interface IGroupValue{
  label:string;
  text:string;
}
export interface IGroupedRefinerDialogState {  
  options:IGroupValue[];
}