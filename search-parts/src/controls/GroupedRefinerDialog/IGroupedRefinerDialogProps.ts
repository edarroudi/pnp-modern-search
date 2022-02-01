import { IGroupedRefinerDialogStrings } from "./IGroupedRefinerDialogStrings";
import { PropertyFieldCodeEditorLanguages } from "@pnp/spfx-property-controls/lib/PropertyFieldCodeEditor";

export interface IGroupedRefinerDialogProps {
  dialogTextFieldValue?: string;
  onChanged?: (text: string) => void;
  disabled?: boolean;
  strings: IGroupedRefinerDialogStrings;
  stateKey?: string;
  language?: PropertyFieldCodeEditorLanguages;
}