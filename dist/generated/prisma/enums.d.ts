export declare const AccountStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly INACTIVE: 'INACTIVE';
    readonly SUSPENDED: 'SUSPENDED';
};
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];
export declare const BloodGroup: {
    readonly A_POSITIVE: 'A_POSITIVE';
    readonly A_NEGATIVE: 'A_NEGATIVE';
    readonly B_POSITIVE: 'B_POSITIVE';
    readonly B_NEGATIVE: 'B_NEGATIVE';
    readonly AB_POSITIVE: 'AB_POSITIVE';
    readonly AB_NEGATIVE: 'AB_NEGATIVE';
    readonly O_POSITIVE: 'O_POSITIVE';
    readonly O_NEGATIVE: 'O_NEGATIVE';
};
export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup];
export declare const VerificationStatus: {
    readonly UNVERIFIED: 'UNVERIFIED';
    readonly PENDING: 'PENDING';
    readonly VERIFIED: 'VERIFIED';
    readonly REJECTED: 'REJECTED';
};
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
export declare const StaffRole: {
    readonly COORDINATOR: 'COORDINATOR';
    readonly MEDICAL_VERIFIER: 'MEDICAL_VERIFIER';
    readonly HOSPITAL_ADMIN: 'HOSPITAL_ADMIN';
};
export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole];
export declare const BloodRequestStatus: {
    readonly PENDING: 'PENDING';
    readonly COORDINATING: 'COORDINATING';
    readonly SCHEDULED: 'SCHEDULED';
    readonly FULFILLED: 'FULFILLED';
    readonly CANCELLED: 'CANCELLED';
};
export type BloodRequestStatus = (typeof BloodRequestStatus)[keyof typeof BloodRequestStatus];
//# sourceMappingURL=enums.d.ts.map