declare interface ISearchBoxWebPartStrings {
    General: {
        DynamicPropertyDefinition: string;
        PlaceHolder: {
            EditLabel: string;
            IconText: string;
            Description: string;
            ConfigureBtnLabel: string;
        }
    },
    PropertyPane: {
        SearchBoxSettingsGroup: {
            GroupName: string;
            PlaceholderTextLabel: string;
            SearchInNewPageLabel: string;
            PageUrlLabel: string;
            UrlErrorMessage: string;
            QueryPathBehaviorLabel: string;
            QueryInputTransformationLabel: string;
            UrlFragmentQueryPathBehavior: string;
            QueryStringQueryPathBehavior: string;
            QueryStringParameterName: string;
            QueryParameterNotEmpty: string;
        },
        AvailableConnectionsGroup: {
            GroupName: string;
            UseDynamicDataSourceLabel: string;
            QueryKeywordsPropertyLabel: string;
        }
        QuerySuggestionsGroup: {
            GroupName: string;
            EnableQuerySuggestions: string;
            EditSuggestionProvidersLabel: string;
            SuggestionProvidersLabel: string;
            SuggestionProvidersDescription: string;
            EnabledPropertyLabel: string;
            ProviderNamePropertyLabel: string;
            ProviderDescriptionPropertyLabel: string;
            DefaultSuggestionGroupName: string;
            NumberOfSuggestionsToShow: string;
        },
        InformationPage: {
            Extensibility: {
                PanelHeader: string;
                PanelDescription: string;
            }
        },
        ImportExport: string,
        LayoutPage: {
            AvailableLayoutsGroupName: string;
            LayoutTemplateOptionsGroupName: string;
            TemplateUrlFieldLabel: string;
            TemplateUrlPlaceholder: string;
            ErrorTemplateExtension: string;
            ErrorTemplateResolve: string;
            SearchBoxTemplateFieldLabel: string;
            SearchBoxTemplatePanelHeader: string;
        }
    },
    SearchBox: {
        DefaultPlaceholder: string;
        SearchButtonLabel: string;
    }
}

declare module 'SearchBoxWebPartStrings' {
    const strings: ISearchBoxWebPartStrings;
    export = strings;
}
