import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Hospital: 'Hospital';
    readonly StaffMember: 'StaffMember';
    readonly Donor: 'Donor';
    readonly BloodRequest: 'BloodRequest';
    readonly Donation: 'Donation';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const HospitalScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly city: 'city';
    readonly contactPhone: 'contactPhone';
};
export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum];
export declare const StaffMemberScalarFieldEnum: {
    readonly id: 'id';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly email: 'email';
    readonly passwordHash: 'passwordHash';
    readonly role: 'role';
    readonly hospitalId: 'hospitalId';
};
export type StaffMemberScalarFieldEnum = (typeof StaffMemberScalarFieldEnum)[keyof typeof StaffMemberScalarFieldEnum];
export declare const DonorScalarFieldEnum: {
    readonly id: 'id';
    readonly firstName: 'firstName';
    readonly lastName: 'lastName';
    readonly email: 'email';
    readonly passwordHash: 'passwordHash';
    readonly contactPhone: 'contactPhone';
    readonly isVerified: 'isVerified';
    readonly bloodGroup: 'bloodGroup';
};
export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum];
export declare const BloodRequestScalarFieldEnum: {
    readonly id: 'id';
    readonly patientName: 'patientName';
    readonly bloodGroup: 'bloodGroup';
    readonly units: 'units';
    readonly hospitalId: 'hospitalId';
    readonly requiredBy: 'requiredBy';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum];
export declare const DonationScalarFieldEnum: {
    readonly id: 'id';
    readonly donorId: 'donorId';
    readonly requestId: 'requestId';
    readonly units: 'units';
    readonly donatedAt: 'donatedAt';
};
export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map