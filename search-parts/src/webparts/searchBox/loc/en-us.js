define([], function() {
    return {
        General: {
            DynamicPropertyDefinition: "Search query",
            PlaceHolder: {
                EditLabel: "Edit",
                IconText: "SearchBox by @PnP",
                Description: "Displays SearchBox",
                ConfigureBtnLabel: "Configure"
            }
        },
        PropertyPane: {
            SearchBoxSettingsGroup: {
                GroupName: "Search box settings",
                PlaceholderTextLabel: "Placeholder text to display in the search box",
                SearchInNewPageLabel: "Send the query to a new page",
                PageUrlLabel: "Page URL",
                UrlErrorMessage: "Please provide a valid URL.",
                QueryPathBehaviorLabel: "Method",
                QueryInputTransformationLabel: "Query input transformation template",
                UrlFragmentQueryPathBehavior: "URL fragment",
                QueryStringQueryPathBehavior: "Query string parameter",
                QueryStringParameterName: "Parameter name",
                QueryParameterNotEmpty: "Please provide a value for the parameter."
            },
            AvailableConnectionsGroup: {
                GroupName: "Available connections",
                UseDynamicDataSourceLabel: "Use dynamic data source as default input",
                QueryKeywordsPropertyLabel: ""
            },
            QuerySuggestionsGroup: {
                GroupName: "Query suggestions",
                EnableQuerySuggestions: "Enable query suggestions",
                EditSuggestionProvidersLabel: "Configure available providers",
                SuggestionProvidersLabel: "Suggestion providers",
                SuggestionProvidersDescription: "Enable or disable individual suggestion providers.",
                EnabledPropertyLabel: "Enabled",
                ProviderNamePropertyLabel: "Name",
                ProviderDescriptionPropertyLabel: "Description",
                DefaultSuggestionGroupName: "Recommended",
                NumberOfSuggestionsToShow: "Number of suggestions to show per group"
            },
            InformationPage: {
                Extensibility: {
                    PanelHeader: "Configure extensibility libraries to load at startup for custom suggestions providers",
                    PanelDescription: "Add/Remove your custom extensibility library IDs here. You can specify a display name and decide if the library should be loaded or not at startup. Only custom suggestions providers will be loaded here.",
                }
            },
            ImportExport: "Import / Export settings",
            LayoutPage: {
                AvailableLayoutsGroupName: "Available layouts",
                LayoutTemplateOptionsGroupName: "Layout options",
                TemplateUrlFieldLabel: "Use an external template URL",
                TemplateUrlPlaceholder: "https://myfile.html",
                ErrorTemplateExtension: "The template must be a valid .htm or .html file",
                ErrorTemplateResolve: "Unable to resolve the specified template. Error details: '{0}'",
                SearchBoxTemplateFieldLabel: "Edit searchBox template",
                SearchBoxTemplatePanelHeader: "Edit searchBox template"
            }
        },
        SearchBox: {
            DefaultPlaceholder: "Enter your search terms...",
            SearchButtonLabel: "Search"
        }
    }
});