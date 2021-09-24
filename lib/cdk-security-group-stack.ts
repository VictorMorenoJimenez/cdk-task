import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

export interface CdkSecurityGroupStackProps extends cdk.StackProps {
  ipToAllow: string
  securityGroupId: string
}

export class CdkSecurityGroupStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: CdkSecurityGroupStackProps) {
    super(scope, id, props);
    const ipToAllowWithMask = `${props.ipToAllow}/32`
    const securityGroup = this.getSecurityGroup(props.securityGroupId)
    securityGroup.addIngressRule(ec2.Peer.ipv4(ipToAllowWithMask), ec2.Port.tcp(22), `Allow SSH Access from ip ${ipToAllowWithMask}`)
    securityGroup.addIngressRule(ec2.Peer.ipv4(ipToAllowWithMask), ec2.Port.tcp(80), `Allow HTTP Access ${ipToAllowWithMask}`)
  }

  private getSecurityGroup(sgId: string): ec2.SecurityGroup {
    return ec2.SecurityGroup.fromLookup(this, 'SGLookUp', sgId) as ec2.SecurityGroup
  }
}