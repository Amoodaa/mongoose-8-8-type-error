change mongoose ver in package.json to 8.8.3
run `yarn build` between both versions

## On `8.7.3`

```
PS D:\code\mongoose-8-8-type-error> yarn list mongoose
yarn list v1.22.22
warning Filtering by arguments is deprecated. Please use the pattern option instead.
└─ mongoose@8.7.3
Done in 0.16s.
PS D:\code\mongoose-8-8-type-error> yarn build
yarn run v1.22.22
$ tsc --noEmit
Done in 7.02s.
```

## on `8.8.3`

```
PS D:\code\mongoose-8-8-type-error> yarn
yarn install v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 2.18s.
PS D:\code\mongoose-8-8-type-error> yarn list mongoose
yarn list v1.22.22
warning Filtering by arguments is deprecated. Please use the pattern option instead.
└─ mongoose@8.8.3
Done in 0.15s.
PS D:\code\mongoose-8-8-type-error> yarn build
yarn run v1.22.22
$ tsc --noEmit
index.ts:35:5 - error TS2322: Type 'Foo & { _id: ObjectId; }' is not assignable to type '{ state: "on" | "off"; } & { _id: ObjectId; } & { __v: number; }'.
  Property '__v' is missing in type 'Foo & { _id: ObjectId; }' but required in type '{ __v: number; }'.

35     foundFoo = createdFoo.toObject(); // this errors on 8.8.3
       ~~~~~~~~

  node_modules/mongoose/types/index.d.ts:143:13
    143     : T & { __v: number };
                    ~~~
    '__v' is declared here.


Found 1 error in index.ts:35

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
