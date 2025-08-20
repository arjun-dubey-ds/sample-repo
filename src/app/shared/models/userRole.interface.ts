export interface UserRole{
    roleID: number;
    roleName: string;
    securityLevel?: string;
    adGlobalGroup?: string;
    createdBy?: number;
    createdOn?: string;
}

export enum Role{
    DEFAULT = "DEFAULT",
    USER = "USER",
    TEAM_MEMBER = "TEAM_MEMBER",
    ADMIN = "ADMIN",
    SUPER_USER = "SUPER_USER"
}

export interface AccessData {
    roleTypePrivilegeID: number;
    privilegeID: number;
    viewAccess: boolean;
    editAccess: boolean;
    deleteAccess: boolean;
    assignAccess: boolean;
}