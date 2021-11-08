
import { BaseLayout } from "@pnp/modern-search-extensibility";
import { IPropertyPaneField, PropertyPaneSlider, PropertyPaneToggle } from "@microsoft/sp-property-pane";
import * as strings from 'CommonStrings';

export interface IDefaultSearchBoxLayoutProperties {

    /**
     * TODO
     */
    todo: boolean;

}

export class DefaultSearchBoxLayout extends BaseLayout<IDefaultSearchBoxLayoutProperties> {

    public async onInit(): Promise<void> {

        // Setup default values
        // this.properties.todo = this.properties.todo ? this.properties.preferedFilterNumberPerRow : 3; 
    }

    public getPropertyPaneFieldsConfiguration(availableFields: string[]): IPropertyPaneField<any>[] {

        return [
            PropertyPaneToggle('layoutProperties.todo', {
                label: "TODO" ,//strings.Layouts.Horizontal.PreferedFilterNumberPerRow,                
                checked:this.properties.todo   
            })              
        ];
    }

    public onPropertyUpdate(propertyPath: string, oldValue: any, newValue: any) {
        /*
        if (propertyPath.localeCompare('layoutProperties.todo') === 0) {
            // Calculate the correct % for card flex-basis
            this.properties.columnSizePercentage = Math.floor(100 /newValue)-1;
        }*/
    }
}