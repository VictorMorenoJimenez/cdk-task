#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSecurityGroupStack } from '../lib/cdk-security-group-stack';

const app = new cdk.App();
const ipToAllow = app.node.tryGetContext('ipToAllow')
const securityGroupId = app.node.tryGetContext('securityGroupId')
new CdkSecurityGroupStack(app, 'CdkSecurityGroupStack', {
  ipToAllow: ipToAllow,
  securityGroupId: securityGroupId
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
