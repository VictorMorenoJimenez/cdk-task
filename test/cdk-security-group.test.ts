import { SynthUtils } from '@aws-cdk/assert'
import '@aws-cdk/assert/jest'
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { CdkSecurityGroupStack, CdkSecurityGroupStackProps } from '../lib/cdk-security-group-stack'

test('Test MyCdkSecurityGroupStack', () => {
    const app = new cdk.App();
    const stackProps: CdkSecurityGroupStackProps = {
        securityGroupId: 'sg-1234',
        ipToAllow: '10.10.1.34'
    }
    // Mock calls
    const myVpc = new ec2.Vpc(app, 'vpcTest')
    const mockGetSecurityGroup = jest.fn().mockReturnValue(new ec2.SecurityGroup(app, 'mySG', {
        vpc: myVpc
    }))
    CdkSecurityGroupStack.prototype['getSecurityGroup'] = mockGetSecurityGroup
    // WHEN
    const stack = new CdkSecurityGroupStack(app, 'MyCdkSecurityGroupStack', stackProps);
    // THEN
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
});
