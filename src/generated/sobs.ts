import { RestObject, SObject, sField, SalesforceFieldType, SFLocation } from "ts-force";
/**
 * Immutable Property Interface for Opportunity
 */
export interface OpportunityFields {
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly accountId?: string;
    readonly isPrivate?: boolean;
    readonly name?: string;
    readonly description?: string;
    readonly stageName?: string;
    readonly amount?: number;
    readonly probability?: number;
    readonly expectedRevenue?: number;
    readonly totalOpportunityQuantity?: number;
    readonly closeDate?: Date;
    readonly type?: string;
    readonly nextStep?: string;
    readonly leadSource?: string;
    readonly isClosed?: boolean;
    readonly isWon?: boolean;
    readonly forecastCategory?: string;
    readonly forecastCategoryName?: string;
    readonly campaignId?: string;
    readonly hasOpportunityLineItem?: boolean;
    readonly pricebook2Id?: string;
    readonly ownerId?: string;
    readonly createdDate?: Date;
    readonly createdById?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedById?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly fiscalQuarter?: number;
    readonly fiscalYear?: number;
    readonly fiscal?: string;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly hasOpenActivity?: boolean;
    readonly hasOverdueTask?: boolean;
    readonly deliveryInstallationStatus?: string;
    readonly trackingNumber?: string;
    readonly orderNumber?: string;
    readonly currentGenerators?: string;
    readonly mainCompetitors?: string;
    readonly roadmap?: string;
    readonly touches?: number;
}
/**
 * Generated class for Opportunity
 */
export class Opportunity extends RestObject  implements OpportunityFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID })
    id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    isDeleted: boolean;
    @sField({ apiName: 'AccountId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    accountId: string;
    @sField({ apiName: 'IsPrivate', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    isPrivate: boolean;
    @sField({ apiName: 'Name', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    name: string;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA })
    description: string;
    @sField({ apiName: 'StageName', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    stageName: string;
    @sField({ apiName: 'Amount', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.CURRENCY })
    amount: number;
    @sField({ apiName: 'Probability', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PERCENT })
    probability: number;
    @sField({ apiName: 'ExpectedRevenue', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.CURRENCY })
    expectedRevenue: number;
    @sField({ apiName: 'TotalOpportunityQuantity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE })
    totalOpportunityQuantity: number;
    @sField({ apiName: 'CloseDate', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE })
    closeDate: Date;
    @sField({ apiName: 'Type', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    type: string;
    @sField({ apiName: 'NextStep', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    nextStep: string;
    @sField({ apiName: 'LeadSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    leadSource: string;
    @sField({ apiName: 'IsClosed', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    isClosed: boolean;
    @sField({ apiName: 'IsWon', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    isWon: boolean;
    @sField({ apiName: 'ForecastCategory', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    forecastCategory: string;
    @sField({ apiName: 'ForecastCategoryName', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    forecastCategoryName: string;
    @sField({ apiName: 'CampaignId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    campaignId: string;
    @sField({ apiName: 'HasOpportunityLineItem', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    hasOpportunityLineItem: boolean;
    @sField({ apiName: 'Pricebook2Id', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    pricebook2Id: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    ownerId: string;
    @sField({ apiName: 'CreatedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME })
    createdDate: Date;
    @sField({ apiName: 'CreatedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    createdById: string;
    @sField({ apiName: 'LastModifiedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME })
    lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE })
    lastModifiedById: string;
    @sField({ apiName: 'SystemModstamp', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME })
    systemModstamp: Date;
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE })
    lastActivityDate: Date;
    @sField({ apiName: 'FiscalQuarter', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT })
    fiscalQuarter: number;
    @sField({ apiName: 'FiscalYear', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT })
    fiscalYear: number;
    @sField({ apiName: 'Fiscal', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    fiscal: string;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME })
    lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME })
    lastReferencedDate: Date;
    @sField({ apiName: 'HasOpenActivity', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    hasOpenActivity: boolean;
    @sField({ apiName: 'HasOverdueTask', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN })
    hasOverdueTask: boolean;
    @sField({ apiName: 'DeliveryInstallationStatus__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST })
    deliveryInstallationStatus: string;
    @sField({ apiName: 'TrackingNumber__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    trackingNumber: string;
    @sField({ apiName: 'OrderNumber__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    orderNumber: string;
    @sField({ apiName: 'CurrentGenerators__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    currentGenerators: string;
    @sField({ apiName: 'MainCompetitors__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING })
    mainCompetitors: string;
    @sField({ apiName: 'Roadmap__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.MULTIPICKLIST })
    roadmap: string;
    @sField({ apiName: 'Touches__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE })
    touches: number;
    constructor(fields?: OpportunityFields) {
        super('Opportunity');
        this.id = void 0;
        this.isDeleted = void 0;
        this.accountId = void 0;
        this.isPrivate = void 0;
        this.name = void 0;
        this.description = void 0;
        this.stageName = void 0;
        this.amount = void 0;
        this.probability = void 0;
        this.expectedRevenue = void 0;
        this.totalOpportunityQuantity = void 0;
        this.closeDate = void 0;
        this.type = void 0;
        this.nextStep = void 0;
        this.leadSource = void 0;
        this.isClosed = void 0;
        this.isWon = void 0;
        this.forecastCategory = void 0;
        this.forecastCategoryName = void 0;
        this.campaignId = void 0;
        this.hasOpportunityLineItem = void 0;
        this.pricebook2Id = void 0;
        this.ownerId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.fiscalQuarter = void 0;
        this.fiscalYear = void 0;
        this.fiscal = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.hasOpenActivity = void 0;
        this.hasOverdueTask = void 0;
        this.deliveryInstallationStatus = void 0;
        this.trackingNumber = void 0;
        this.orderNumber = void 0;
        this.currentGenerators = void 0;
        this.mainCompetitors = void 0;
        this.roadmap = void 0;
        this.touches = void 0;
        Object.assign(this, fields);
    }
    static async retrieve(qry: string): Promise<Opportunity[]> {
        return await RestObject.query<Opportunity>(Opportunity, qry);
    }
    toImmutable(): OpportunityFields {
        return this.clone();
    }
}
