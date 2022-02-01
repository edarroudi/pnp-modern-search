import * as React from 'react';
import { Suspense } from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react';
import { ButtonType, PrimaryButton } from 'office-ui-fabric-react';
import { IGroupedRefinerDialogProps } from './IGroupedRefinerDialogProps';
import { IGroupedRefinerDialogState } from './IGroupedRefinerDialogState';
import styles from './GroupedRefinerDialog.module.scss';

import { TextField } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react';
const AceEditor = React.lazy(() => import('react-ace'));

export default class GroupedRefinerDialog extends React.Component<IGroupedRefinerDialogProps, IGroupedRefinerDialogState> {

	/*************************************************************************************
	 * Component's constructor
	 * @param props 
	 * @param state 
	 *************************************************************************************/
	constructor(props: IGroupedRefinerDialogProps, state: IGroupedRefinerDialogState) {
		super(props);
		this.state = {
			dialogText: this.props.dialogTextFieldValue ? this.props.dialogTextFieldValue : "",
			showDialog: false
		};
	}


	/*************************************************************************************
	 * Shows the dialog
	 *************************************************************************************/
	private showDialog() {
		this.setState({ dialogText: this.state.dialogText ? this.state.dialogText : "", showDialog: true });
	}


	/*************************************************************************************
	 * Notifies the parent with the dialog's latest value, then closes the dialog
	 *************************************************************************************/
	private saveDialog() {
		this.setState({ dialogText: this.state.dialogText ? this.state.dialogText : "", showDialog: false });

		if (this.props.onChanged) {
			this.props.onChanged(this.state.dialogText);
		}
	}


	/*************************************************************************************
	 * Closes the dialog without notifying the parent for any changes
	 *************************************************************************************/
	private cancelDialog() {
		this.setState({ dialogText: this.props.dialogTextFieldValue ? this.props.dialogTextFieldValue : "", showDialog: false });
	}


	/*************************************************************************************
	 * Updates the dialog's value each time the textfield changes
	 *************************************************************************************/
	private onDialogTextChanged(newValue: string) {
		this.setState({ dialogText: newValue, showDialog: this.state.showDialog });
	}


	/*************************************************************************************
	 * Called immediately after updating occurs
	 *************************************************************************************/
	public componentDidUpdate(prevProps: IGroupedRefinerDialogProps, prevState: IGroupedRefinerDialogState): void {
		if (this.props.disabled !== prevProps.disabled || this.props.stateKey !== prevProps.stateKey) {
			this.setState({ dialogText: this.props.dialogTextFieldValue ? this.props.dialogTextFieldValue : "", showDialog: this.state.showDialog });
		}
	}


	/*************************************************************************************
	 * Renders the the GroupedRefinerDialog component
	 *************************************************************************************/
	public render() {
		return (
			<div>

				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextField value={this.state.dialogText} readOnly={true} styles={{ root: { width: '100%', marginRight: 15, fontSize: 'small', fontFamily: 'Courier New' } }} />
					<Icon iconName='CodeEdit' onClick={this.showDialog.bind(this)} styles={{ root: { fontSize: 20, cursor: 'pointer' } }} />
				</div>

				<Dialog hidden={!this.state.showDialog}
					dialogContentProps={{
						subText: this.props.strings.dialogTitle,
						type: DialogType.normal
					}}
					onDismiss={this.cancelDialog.bind(this)}
					title={this.props.strings.dialogTitle}

					modalProps={
						{
							isBlocking: true,
							containerClassName: 'ms-dialogMainOverride ' + styles.GroupedRefinerDialog,
						}
					}>
					<Suspense fallback={""}>
						<AceEditor
							width="600px"
							mode={this.props.language ? this.props.language : 'html'}
							theme="monokai"
							enableLiveAutocompletion={false}
							showPrintMargin={false}
							showGutter={true}
							onChange={this.onDialogTextChanged.bind(this)}
							value={this.state.dialogText}
							highlightActiveLine={true}
							editorProps={
								{
									$blockScrolling: Infinity
								}
							}
							name="CodeEditor"
							enableBasicAutocompletion={true}
						/>
					</Suspense>
					<DialogFooter>
						<PrimaryButton buttonType={ButtonType.primary} onClick={this.saveDialog.bind(this)}>{this.props.strings.saveButtonText}</PrimaryButton>
						<PrimaryButton onClick={this.cancelDialog.bind(this)}>{this.props.strings.cancelButtonText}</PrimaryButton>
					</DialogFooter>
				</Dialog>
			</div>
		);
	}
}
