// https://docs.microsoft.com/en-us/graph/api/resources/searchresponse?view=graph-rest-beta
export interface IMicrosoftSearchResponse {
    value: IMicrosoftSearchResultSet;
}

export interface IMicrosoftSearchResultSet {
    hitsContainers: ISearchHitsContainer[];
    searchTerms: string[];
    queryAlterationResponse?: IQueryAlterationResponse;
}

export interface ISearchHitsContainer {
    hits: ISearchHit[];
    moreResultsAvailable: boolean;
    total: number;
    aggregations: ISearchResponseAggregation[];
}

export interface ISearchHit {
    hitId: string;
    rank: number;
    summary: string;
    contentSource: string;
    resource: ISearchResponseResource;
}

export interface ISearchResponseAggregation {
    field: string;
    size?: number;
    buckets: IBucket[];
}

export interface IBucket {
    key: string;
    count: number;
    aggregationFilterToken: string;
}

export interface ISearchResponseResource {
    "@odata.type": string;
    fields?: {
        [fieldName: string]: string;
    };
}

// Query alteration response
// https://docs.microsoft.com/en-us/graph/api/resources/alterationresponse?view=graph-rest-beta 
export interface IQueryAlterationResponse {
    originalQueryString:string;
    queryAlteration:ISearchAlteration;
    queryAlterationType: "suggestion"|"modification";
}

export interface ISearchAlteration {
    alteredQueryString:string;
    alteredHighlightedQueryString:string;
    alteredQueryTokens:IAlteredQueryTokens[];
}

export interface IAlteredQueryTokens {
    offset:number;
    length:number;
    suggestion:string;
}