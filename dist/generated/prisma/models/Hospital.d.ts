import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Hospital
 *
 */
export type HospitalModel = runtime.Types.Result.DefaultSelection<Prisma.$HospitalPayload>;
export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
};
export type HospitalMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    city: string | null;
    contactPhone: string | null;
};
export type HospitalMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    city: string | null;
    contactPhone: string | null;
};
export type HospitalCountAggregateOutputType = {
    id: number;
    name: number;
    city: number;
    contactPhone: number;
    _all: number;
};
export type HospitalMinAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    contactPhone?: true;
};
export type HospitalMaxAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    contactPhone?: true;
};
export type HospitalCountAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    contactPhone?: true;
    _all?: true;
};
export type HospitalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Prisma.HospitalOrderByWithRelationInput | Prisma.HospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType;
};
export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
    [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHospital[P]> : Prisma.GetScalarType<T[P], AggregateHospital[P]>;
};
export type HospitalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalWhereInput;
    orderBy?: Prisma.HospitalOrderByWithAggregationInput | Prisma.HospitalOrderByWithAggregationInput[];
    by: Prisma.HospitalScalarFieldEnum[] | Prisma.HospitalScalarFieldEnum;
    having?: Prisma.HospitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalCountAggregateInputType | true;
    _min?: HospitalMinAggregateInputType;
    _max?: HospitalMaxAggregateInputType;
};
export type HospitalGroupByOutputType = {
    id: string;
    name: string;
    city: string;
    contactPhone: string;
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
};
export type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HospitalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HospitalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HospitalGroupByOutputType[P]>;
}>>;
export type HospitalWhereInput = {
    AND?: Prisma.HospitalWhereInput | Prisma.HospitalWhereInput[];
    OR?: Prisma.HospitalWhereInput[];
    NOT?: Prisma.HospitalWhereInput | Prisma.HospitalWhereInput[];
    id?: Prisma.UuidFilter<"Hospital"> | string;
    name?: Prisma.StringFilter<"Hospital"> | string;
    city?: Prisma.StringFilter<"Hospital"> | string;
    contactPhone?: Prisma.StringFilter<"Hospital"> | string;
    staffMembers?: Prisma.StaffMemberListRelationFilter;
    bloodRequests?: Prisma.BloodRequestListRelationFilter;
};
export type HospitalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    staffMembers?: Prisma.StaffMemberOrderByRelationAggregateInput;
    bloodRequests?: Prisma.BloodRequestOrderByRelationAggregateInput;
};
export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HospitalWhereInput | Prisma.HospitalWhereInput[];
    OR?: Prisma.HospitalWhereInput[];
    NOT?: Prisma.HospitalWhereInput | Prisma.HospitalWhereInput[];
    name?: Prisma.StringFilter<"Hospital"> | string;
    city?: Prisma.StringFilter<"Hospital"> | string;
    contactPhone?: Prisma.StringFilter<"Hospital"> | string;
    staffMembers?: Prisma.StaffMemberListRelationFilter;
    bloodRequests?: Prisma.BloodRequestListRelationFilter;
}, "id">;
export type HospitalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    _count?: Prisma.HospitalCountOrderByAggregateInput;
    _max?: Prisma.HospitalMaxOrderByAggregateInput;
    _min?: Prisma.HospitalMinOrderByAggregateInput;
};
export type HospitalScalarWhereWithAggregatesInput = {
    AND?: Prisma.HospitalScalarWhereWithAggregatesInput | Prisma.HospitalScalarWhereWithAggregatesInput[];
    OR?: Prisma.HospitalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HospitalScalarWhereWithAggregatesInput | Prisma.HospitalScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Hospital"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Hospital"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Hospital"> | string;
    contactPhone?: Prisma.StringWithAggregatesFilter<"Hospital"> | string;
};
export type HospitalCreateInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    staffMembers?: Prisma.StaffMemberCreateNestedManyWithoutHospitalInput;
    bloodRequests?: Prisma.BloodRequestCreateNestedManyWithoutHospitalInput;
};
export type HospitalUncheckedCreateInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    staffMembers?: Prisma.StaffMemberUncheckedCreateNestedManyWithoutHospitalInput;
    bloodRequests?: Prisma.BloodRequestUncheckedCreateNestedManyWithoutHospitalInput;
};
export type HospitalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    staffMembers?: Prisma.StaffMemberUpdateManyWithoutHospitalNestedInput;
    bloodRequests?: Prisma.BloodRequestUpdateManyWithoutHospitalNestedInput;
};
export type HospitalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    staffMembers?: Prisma.StaffMemberUncheckedUpdateManyWithoutHospitalNestedInput;
    bloodRequests?: Prisma.BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput;
};
export type HospitalCreateManyInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
};
export type HospitalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HospitalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type HospitalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
};
export type HospitalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
};
export type HospitalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
};
export type HospitalScalarRelationFilter = {
    is?: Prisma.HospitalWhereInput;
    isNot?: Prisma.HospitalWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type HospitalCreateNestedOneWithoutStaffMembersInput = {
    create?: Prisma.XOR<Prisma.HospitalCreateWithoutStaffMembersInput, Prisma.HospitalUncheckedCreateWithoutStaffMembersInput>;
    connectOrCreate?: Prisma.HospitalCreateOrConnectWithoutStaffMembersInput;
    connect?: Prisma.HospitalWhereUniqueInput;
};
export type HospitalUpdateOneRequiredWithoutStaffMembersNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalCreateWithoutStaffMembersInput, Prisma.HospitalUncheckedCreateWithoutStaffMembersInput>;
    connectOrCreate?: Prisma.HospitalCreateOrConnectWithoutStaffMembersInput;
    upsert?: Prisma.HospitalUpsertWithoutStaffMembersInput;
    connect?: Prisma.HospitalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HospitalUpdateToOneWithWhereWithoutStaffMembersInput, Prisma.HospitalUpdateWithoutStaffMembersInput>, Prisma.HospitalUncheckedUpdateWithoutStaffMembersInput>;
};
export type HospitalCreateNestedOneWithoutBloodRequestsInput = {
    create?: Prisma.XOR<Prisma.HospitalCreateWithoutBloodRequestsInput, Prisma.HospitalUncheckedCreateWithoutBloodRequestsInput>;
    connectOrCreate?: Prisma.HospitalCreateOrConnectWithoutBloodRequestsInput;
    connect?: Prisma.HospitalWhereUniqueInput;
};
export type HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalCreateWithoutBloodRequestsInput, Prisma.HospitalUncheckedCreateWithoutBloodRequestsInput>;
    connectOrCreate?: Prisma.HospitalCreateOrConnectWithoutBloodRequestsInput;
    upsert?: Prisma.HospitalUpsertWithoutBloodRequestsInput;
    connect?: Prisma.HospitalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HospitalUpdateToOneWithWhereWithoutBloodRequestsInput, Prisma.HospitalUpdateWithoutBloodRequestsInput>, Prisma.HospitalUncheckedUpdateWithoutBloodRequestsInput>;
};
export type HospitalCreateWithoutStaffMembersInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    bloodRequests?: Prisma.BloodRequestCreateNestedManyWithoutHospitalInput;
};
export type HospitalUncheckedCreateWithoutStaffMembersInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    bloodRequests?: Prisma.BloodRequestUncheckedCreateNestedManyWithoutHospitalInput;
};
export type HospitalCreateOrConnectWithoutStaffMembersInput = {
    where: Prisma.HospitalWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalCreateWithoutStaffMembersInput, Prisma.HospitalUncheckedCreateWithoutStaffMembersInput>;
};
export type HospitalUpsertWithoutStaffMembersInput = {
    update: Prisma.XOR<Prisma.HospitalUpdateWithoutStaffMembersInput, Prisma.HospitalUncheckedUpdateWithoutStaffMembersInput>;
    create: Prisma.XOR<Prisma.HospitalCreateWithoutStaffMembersInput, Prisma.HospitalUncheckedCreateWithoutStaffMembersInput>;
    where?: Prisma.HospitalWhereInput;
};
export type HospitalUpdateToOneWithWhereWithoutStaffMembersInput = {
    where?: Prisma.HospitalWhereInput;
    data: Prisma.XOR<Prisma.HospitalUpdateWithoutStaffMembersInput, Prisma.HospitalUncheckedUpdateWithoutStaffMembersInput>;
};
export type HospitalUpdateWithoutStaffMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodRequests?: Prisma.BloodRequestUpdateManyWithoutHospitalNestedInput;
};
export type HospitalUncheckedUpdateWithoutStaffMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodRequests?: Prisma.BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput;
};
export type HospitalCreateWithoutBloodRequestsInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    staffMembers?: Prisma.StaffMemberCreateNestedManyWithoutHospitalInput;
};
export type HospitalUncheckedCreateWithoutBloodRequestsInput = {
    id?: string;
    name: string;
    city: string;
    contactPhone: string;
    staffMembers?: Prisma.StaffMemberUncheckedCreateNestedManyWithoutHospitalInput;
};
export type HospitalCreateOrConnectWithoutBloodRequestsInput = {
    where: Prisma.HospitalWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalCreateWithoutBloodRequestsInput, Prisma.HospitalUncheckedCreateWithoutBloodRequestsInput>;
};
export type HospitalUpsertWithoutBloodRequestsInput = {
    update: Prisma.XOR<Prisma.HospitalUpdateWithoutBloodRequestsInput, Prisma.HospitalUncheckedUpdateWithoutBloodRequestsInput>;
    create: Prisma.XOR<Prisma.HospitalCreateWithoutBloodRequestsInput, Prisma.HospitalUncheckedCreateWithoutBloodRequestsInput>;
    where?: Prisma.HospitalWhereInput;
};
export type HospitalUpdateToOneWithWhereWithoutBloodRequestsInput = {
    where?: Prisma.HospitalWhereInput;
    data: Prisma.XOR<Prisma.HospitalUpdateWithoutBloodRequestsInput, Prisma.HospitalUncheckedUpdateWithoutBloodRequestsInput>;
};
export type HospitalUpdateWithoutBloodRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    staffMembers?: Prisma.StaffMemberUpdateManyWithoutHospitalNestedInput;
};
export type HospitalUncheckedUpdateWithoutBloodRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    staffMembers?: Prisma.StaffMemberUncheckedUpdateManyWithoutHospitalNestedInput;
};
/**
 * Count Type HospitalCountOutputType
 */
export type HospitalCountOutputType = {
    staffMembers: number;
    bloodRequests: number;
};
export type HospitalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staffMembers?: boolean | HospitalCountOutputTypeCountStaffMembersArgs;
    bloodRequests?: boolean | HospitalCountOutputTypeCountBloodRequestsArgs;
};
/**
 * HospitalCountOutputType without action
 */
export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: Prisma.HospitalCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * HospitalCountOutputType without action
 */
export type HospitalCountOutputTypeCountStaffMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffMemberWhereInput;
};
/**
 * HospitalCountOutputType without action
 */
export type HospitalCountOutputTypeCountBloodRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodRequestWhereInput;
};
export type HospitalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    contactPhone?: boolean;
    staffMembers?: boolean | Prisma.Hospital$staffMembersArgs<ExtArgs>;
    bloodRequests?: boolean | Prisma.Hospital$bloodRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hospital"]>;
export type HospitalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    contactPhone?: boolean;
}, ExtArgs["result"]["hospital"]>;
export type HospitalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    contactPhone?: boolean;
}, ExtArgs["result"]["hospital"]>;
export type HospitalSelectScalar = {
    id?: boolean;
    name?: boolean;
    city?: boolean;
    contactPhone?: boolean;
};
export type HospitalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "city" | "contactPhone", ExtArgs["result"]["hospital"]>;
export type HospitalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staffMembers?: boolean | Prisma.Hospital$staffMembersArgs<ExtArgs>;
    bloodRequests?: boolean | Prisma.Hospital$bloodRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HospitalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $HospitalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Hospital";
    objects: {
        staffMembers: Prisma.$StaffMemberPayload<ExtArgs>[];
        bloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        city: string;
        contactPhone: string;
    }, ExtArgs["result"]["hospital"]>;
    composites: {};
};
export type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HospitalPayload, S>;
export type HospitalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HospitalCountAggregateInputType | true;
};
export interface HospitalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Hospital'];
        meta: {
            name: 'Hospital';
        };
    };
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: Prisma.SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: Prisma.SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     *
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HospitalFindManyArgs>(args?: Prisma.SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     *
     */
    create<T extends HospitalCreateArgs>(args: Prisma.SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HospitalCreateManyArgs>(args?: Prisma.SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     *
     */
    delete<T extends HospitalDeleteArgs>(args: Prisma.SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HospitalUpdateArgs>(args: Prisma.SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: Prisma.SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: Prisma.SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: Prisma.SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(args?: Prisma.Subset<T, HospitalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HospitalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Prisma.Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>;
    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends HospitalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HospitalGroupByArgs['orderBy'];
    } : {
        orderBy?: HospitalGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Hospital model
     */
    readonly fields: HospitalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Hospital.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    staffMembers<T extends Prisma.Hospital$staffMembersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Hospital$staffMembersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bloodRequests<T extends Prisma.Hospital$bloodRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Hospital$bloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Hospital model
 */
export interface HospitalFieldRefs {
    readonly id: Prisma.FieldRef<"Hospital", 'String'>;
    readonly name: Prisma.FieldRef<"Hospital", 'String'>;
    readonly city: Prisma.FieldRef<"Hospital", 'String'>;
    readonly contactPhone: Prisma.FieldRef<"Hospital", 'String'>;
}
/**
 * Hospital findUnique
 */
export type HospitalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter, which Hospital to fetch.
     */
    where: Prisma.HospitalWhereUniqueInput;
};
/**
 * Hospital findUniqueOrThrow
 */
export type HospitalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter, which Hospital to fetch.
     */
    where: Prisma.HospitalWhereUniqueInput;
};
/**
 * Hospital findFirst
 */
export type HospitalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter, which Hospital to fetch.
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Prisma.HospitalOrderByWithRelationInput | Prisma.HospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Hospitals.
     */
    cursor?: Prisma.HospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Hospitals.
     */
    distinct?: Prisma.HospitalScalarFieldEnum | Prisma.HospitalScalarFieldEnum[];
};
/**
 * Hospital findFirstOrThrow
 */
export type HospitalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter, which Hospital to fetch.
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Prisma.HospitalOrderByWithRelationInput | Prisma.HospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Hospitals.
     */
    cursor?: Prisma.HospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Hospitals.
     */
    distinct?: Prisma.HospitalScalarFieldEnum | Prisma.HospitalScalarFieldEnum[];
};
/**
 * Hospital findMany
 */
export type HospitalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Prisma.HospitalOrderByWithRelationInput | Prisma.HospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Hospitals.
     */
    cursor?: Prisma.HospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Hospitals.
     */
    distinct?: Prisma.HospitalScalarFieldEnum | Prisma.HospitalScalarFieldEnum[];
};
/**
 * Hospital create
 */
export type HospitalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * The data needed to create a Hospital.
     */
    data: Prisma.XOR<Prisma.HospitalCreateInput, Prisma.HospitalUncheckedCreateInput>;
};
/**
 * Hospital createMany
 */
export type HospitalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: Prisma.HospitalCreateManyInput | Prisma.HospitalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Hospital createManyAndReturn
 */
export type HospitalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * The data used to create many Hospitals.
     */
    data: Prisma.HospitalCreateManyInput | Prisma.HospitalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Hospital update
 */
export type HospitalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * The data needed to update a Hospital.
     */
    data: Prisma.XOR<Prisma.HospitalUpdateInput, Prisma.HospitalUncheckedUpdateInput>;
    /**
     * Choose, which Hospital to update.
     */
    where: Prisma.HospitalWhereUniqueInput;
};
/**
 * Hospital updateMany
 */
export type HospitalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: Prisma.XOR<Prisma.HospitalUpdateManyMutationInput, Prisma.HospitalUncheckedUpdateManyInput>;
    /**
     * Filter which Hospitals to update
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number;
};
/**
 * Hospital updateManyAndReturn
 */
export type HospitalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * The data used to update Hospitals.
     */
    data: Prisma.XOR<Prisma.HospitalUpdateManyMutationInput, Prisma.HospitalUncheckedUpdateManyInput>;
    /**
     * Filter which Hospitals to update
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number;
};
/**
 * Hospital upsert
 */
export type HospitalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: Prisma.HospitalWhereUniqueInput;
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: Prisma.XOR<Prisma.HospitalCreateInput, Prisma.HospitalUncheckedCreateInput>;
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HospitalUpdateInput, Prisma.HospitalUncheckedUpdateInput>;
};
/**
 * Hospital delete
 */
export type HospitalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    /**
     * Filter which Hospital to delete.
     */
    where: Prisma.HospitalWhereUniqueInput;
};
/**
 * Hospital deleteMany
 */
export type HospitalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: Prisma.HospitalWhereInput;
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number;
};
/**
 * Hospital.staffMembers
 */
export type Hospital$staffMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffMemberScalarFieldEnum | Prisma.StaffMemberScalarFieldEnum[];
};
/**
 * Hospital.bloodRequests
 */
export type Hospital$bloodRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: Prisma.BloodRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: Prisma.BloodRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BloodRequestInclude<ExtArgs> | null;
    where?: Prisma.BloodRequestWhereInput;
    orderBy?: Prisma.BloodRequestOrderByWithRelationInput | Prisma.BloodRequestOrderByWithRelationInput[];
    cursor?: Prisma.BloodRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodRequestScalarFieldEnum | Prisma.BloodRequestScalarFieldEnum[];
};
/**
 * Hospital without action
 */
export type HospitalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
};
//# sourceMappingURL=Hospital.d.ts.map