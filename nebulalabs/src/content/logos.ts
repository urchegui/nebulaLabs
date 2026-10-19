// Logo wall data. Empty on purpose: no client or company logo is published without
// written approval (approved: true) and no logo asset is committed until then.
export interface Logo {
  name: string;
  src: string;
  approved: boolean;
}

export interface LogoGroups {
  clients: Logo[];
  team: Logo[];
}

export const LOGOS: LogoGroups = { clients: [], team: [] };
