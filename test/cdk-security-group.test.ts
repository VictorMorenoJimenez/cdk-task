import { SynthUtils } from '@aws-cdk/assert'
import '@aws-cdk/assert/jest'
import * as cdk from '@aws-cdk/core';
import { CdkSecurityGroupStack, CdkSecurityGroupStackProps } from '../lib/cdk-security-group-stack'

test('Test MyCdkSecurityGroupStack', () => {
    const app = new cdk.App();
    const stackProps: CdkSecurityGroupStackProps = {
        securityGroupId: 'sg-1234',
        ipToAllow: '10.10.1.34'
    }
    // WHEN
    const stack = new CdkSecurityGroupStack(app, 'MyCdkSecurityGroupStack', stackProps);
    // THEN
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
});
