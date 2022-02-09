import * as React from 'react';
import { Suspense } from 'react';
import { Dialog, DialogType, DialogFooter, TagPicker, ComboBox, IComboBox, IComboBoxOption, TagItem, ITag, ValidationState } from 'office-ui-fabric-react';
import { ButtonType, PrimaryButton } from 'office-ui-fabric-react';
import { IGroupedRefinerDialogProps } from './IGroupedRefinerDialogProps';
import { IGroupedRefinerDialogState } from './IGroupedRefinerDialogState';
import styles from './GroupedRefinerDialog.module.scss';
import { TextField } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react';
import { FieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-controls-react/lib/FieldCollectionData';
import NoSuggestionTagPicker from './NoSuggestionTagPicker';

export default class GroupedRefinerDialog extends React.Component<IGroupedRefinerDialogProps, IGroupedRefinerDialogState> {

	/*************************************************************************************
	 * Component's constructor
	 * @param props 
	 * @param state 
	 *************************************************************************************/
	constructor(props: IGroupedRefinerDialogProps, state: IGroupedRefinerDialogState) {
		super(props);
		this.state = {
			options: this.getDialogOptions()
		};
	}

	private getDialogOptions() {
		/*	return this.props.dialogTextFieldValue?.split(',').filter((value, index, self) => {
				return self.indexOf(value) === index && value !== '';
			}).map(_ => { return { key: _, name: _, selected: true }; }) ?? [];*/
		const c = JSON.parse(this.props.dialogTextFieldValue);
		return c;
	}

	/*************************************************************************************
	 * Called immediately after updating occurs
	 *************************************************************************************/
	public componentDidUpdate(prevProps: IGroupedRefinerDialogProps, prevState: IGroupedRefinerDialogState): void {
		if (this.props.disabled !== prevProps.disabled || this.props.stateKey !== prevProps.stateKey) {
			//	this.setState({ options: this.getDialogOptions() ?? [], showDialog: this.state.showDialog });
		}

		const asd = JSON.stringify(this.state.options);
		if (this.props.onChanged && this.props.dialogTextFieldValue !== asd) {

			this.props.onChanged(asd);
		}
	}

	/*************************************************************************************
	 * Renders the the GroupedRefinerDialog component
	 *************************************************************************************/
	public render() {
		return (

			<FieldCollectionData
				key={"FieldCollectionData"}
				manageBtnLabel={"Manage"}
				saveAndAddBtnLabel={"Save and Add"}
				onChanged={(value) => {
					this.setState({ options: value });
				}}
				panelHeader={"Manage Groups"}
				enableSorting={true}

				itemsPerPage={10}
				fields={[
					{ id: "label", title: "Group Label", type: CustomCollectionFieldType.string, required: true },
					{ id: "advanced", title: "Advanced", type: CustomCollectionFieldType.boolean, defaultValue: false },
					{
						id: "text",
						title: "Values",
						type: CustomCollectionFieldType.custom,
						onCustomRender: (field, value, onUpdate, item, itemId, onError) => {


							return (
								!item.advanced ?
									(<NoSuggestionTagPicker
										key={itemId}
										value={value ?? ''}
										onChanged={(items) => {

											if (!items) {
												onError(field.id, "Values need to be filled");
											} else {
												onError(field.id, "");
												onUpdate("text", items);
											}

										}}

									/>) :
									<TextField multiline />
							);
						}
					}
				]}
				value={this.state.options}
			/>
		);
	}
}
