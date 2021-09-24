import * as cdk from '@aws-cdk/core';
export interface CdkSecurityGroupStackProps extends cdk.StackProps {
    ipToAllow: string;
    securityGroupId: string;
}
export declare class CdkSecurityGroupStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: CdkSecurityGroupStackProps);
    private getSecurityGroup;
}
