
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model SchoolCriteria
 * 
 */
export type SchoolCriteria = $Result.DefaultSelection<Prisma.$SchoolCriteriaPayload>
/**
 * Model Scholarships
 * 
 */
export type Scholarships = $Result.DefaultSelection<Prisma.$ScholarshipsPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolCriteria`: Exposes CRUD operations for the **SchoolCriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolCriteria
    * const schoolCriteria = await prisma.schoolCriteria.findMany()
    * ```
    */
  get schoolCriteria(): Prisma.SchoolCriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scholarships`: Exposes CRUD operations for the **Scholarships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scholarships
    * const scholarships = await prisma.scholarships.findMany()
    * ```
    */
  get scholarships(): Prisma.ScholarshipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    School: 'School',
    SchoolCriteria: 'SchoolCriteria',
    Scholarships: 'Scholarships',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "school" | "schoolCriteria" | "scholarships" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      SchoolCriteria: {
        payload: Prisma.$SchoolCriteriaPayload<ExtArgs>
        fields: Prisma.SchoolCriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolCriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolCriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          findFirst: {
            args: Prisma.SchoolCriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolCriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          findMany: {
            args: Prisma.SchoolCriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>[]
          }
          create: {
            args: Prisma.SchoolCriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          createMany: {
            args: Prisma.SchoolCriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCriteriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>[]
          }
          delete: {
            args: Prisma.SchoolCriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          update: {
            args: Prisma.SchoolCriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          deleteMany: {
            args: Prisma.SchoolCriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolCriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolCriteriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>[]
          }
          upsert: {
            args: Prisma.SchoolCriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolCriteriaPayload>
          }
          aggregate: {
            args: Prisma.SchoolCriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolCriteria>
          }
          groupBy: {
            args: Prisma.SchoolCriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolCriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCriteriaCountAggregateOutputType> | number
          }
        }
      }
      Scholarships: {
        payload: Prisma.$ScholarshipsPayload<ExtArgs>
        fields: Prisma.ScholarshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScholarshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScholarshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          findFirst: {
            args: Prisma.ScholarshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScholarshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          findMany: {
            args: Prisma.ScholarshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>[]
          }
          create: {
            args: Prisma.ScholarshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          createMany: {
            args: Prisma.ScholarshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScholarshipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>[]
          }
          delete: {
            args: Prisma.ScholarshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          update: {
            args: Prisma.ScholarshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          deleteMany: {
            args: Prisma.ScholarshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScholarshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScholarshipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>[]
          }
          upsert: {
            args: Prisma.ScholarshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipsPayload>
          }
          aggregate: {
            args: Prisma.ScholarshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScholarships>
          }
          groupBy: {
            args: Prisma.ScholarshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScholarshipsCountArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipsCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    school?: SchoolOmit
    schoolCriteria?: SchoolCriteriaOmit
    scholarships?: ScholarshipsOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favorite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | UserCountOutputTypeCountFavoriteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    criteria: number
    scholarships: number
    favorites: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | SchoolCountOutputTypeCountCriteriaArgs
    scholarships?: boolean | SchoolCountOutputTypeCountScholarshipsArgs
    favorites?: boolean | SchoolCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolCriteriaWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountScholarshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipsWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    username: string | null
    fullname: string | null
    email: string | null
    nationality: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    fullname: string | null
    email: string | null
    nationality: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    fullname: number
    email: number
    nationality: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    fullname?: true
    email?: true
    nationality?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    fullname?: true
    email?: true
    nationality?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    fullname?: true
    email?: true
    nationality?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    username: string
    fullname: string
    email: string
    nationality: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    fullname?: boolean
    email?: boolean
    nationality?: boolean
    favorite?: boolean | User$favoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    fullname?: boolean
    email?: boolean
    nationality?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    fullname?: boolean
    email?: boolean
    nationality?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    fullname?: boolean
    email?: boolean
    nationality?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "fullname" | "email" | "nationality", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | User$favoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favorite: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      fullname: string
      email: string
      nationality: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorite<T extends User$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nationality: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favorite
   */
  export type User$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    schoolId: number | null
    rank: number | null
    acceptanceRate: Decimal | null
  }

  export type SchoolSumAggregateOutputType = {
    schoolId: number | null
    rank: number | null
    acceptanceRate: Decimal | null
  }

  export type SchoolMinAggregateOutputType = {
    schoolId: number | null
    schoolName: string | null
    state: string | null
    city: string | null
    institutionalControl: string | null
    rank: number | null
    acceptanceRate: Decimal | null
    schoolWebsite: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    schoolId: number | null
    schoolName: string | null
    state: string | null
    city: string | null
    institutionalControl: string | null
    rank: number | null
    acceptanceRate: Decimal | null
    schoolWebsite: string | null
  }

  export type SchoolCountAggregateOutputType = {
    schoolId: number
    schoolName: number
    state: number
    city: number
    institutionalControl: number
    rank: number
    acceptanceRate: number
    schoolWebsite: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    schoolId?: true
    rank?: true
    acceptanceRate?: true
  }

  export type SchoolSumAggregateInputType = {
    schoolId?: true
    rank?: true
    acceptanceRate?: true
  }

  export type SchoolMinAggregateInputType = {
    schoolId?: true
    schoolName?: true
    state?: true
    city?: true
    institutionalControl?: true
    rank?: true
    acceptanceRate?: true
    schoolWebsite?: true
  }

  export type SchoolMaxAggregateInputType = {
    schoolId?: true
    schoolName?: true
    state?: true
    city?: true
    institutionalControl?: true
    rank?: true
    acceptanceRate?: true
    schoolWebsite?: true
  }

  export type SchoolCountAggregateInputType = {
    schoolId?: true
    schoolName?: true
    state?: true
    city?: true
    institutionalControl?: true
    rank?: true
    acceptanceRate?: true
    schoolWebsite?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    schoolId: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal
    schoolWebsite: string
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    schoolName?: boolean
    state?: boolean
    city?: boolean
    institutionalControl?: boolean
    rank?: boolean
    acceptanceRate?: boolean
    schoolWebsite?: boolean
    criteria?: boolean | School$criteriaArgs<ExtArgs>
    scholarships?: boolean | School$scholarshipsArgs<ExtArgs>
    favorites?: boolean | School$favoritesArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    schoolName?: boolean
    state?: boolean
    city?: boolean
    institutionalControl?: boolean
    rank?: boolean
    acceptanceRate?: boolean
    schoolWebsite?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schoolId?: boolean
    schoolName?: boolean
    state?: boolean
    city?: boolean
    institutionalControl?: boolean
    rank?: boolean
    acceptanceRate?: boolean
    schoolWebsite?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    schoolId?: boolean
    schoolName?: boolean
    state?: boolean
    city?: boolean
    institutionalControl?: boolean
    rank?: boolean
    acceptanceRate?: boolean
    schoolWebsite?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"schoolId" | "schoolName" | "state" | "city" | "institutionalControl" | "rank" | "acceptanceRate" | "schoolWebsite", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criteria?: boolean | School$criteriaArgs<ExtArgs>
    scholarships?: boolean | School$scholarshipsArgs<ExtArgs>
    favorites?: boolean | School$favoritesArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      criteria: Prisma.$SchoolCriteriaPayload<ExtArgs>[]
      scholarships: Prisma.$ScholarshipsPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      schoolId: number
      schoolName: string
      state: string
      city: string
      institutionalControl: string
      rank: number
      acceptanceRate: Prisma.Decimal
      schoolWebsite: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `schoolId`
     * const schoolWithSchoolIdOnly = await prisma.school.findMany({ select: { schoolId: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `schoolId`
     * const schoolWithSchoolIdOnly = await prisma.school.createManyAndReturn({
     *   select: { schoolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `schoolId`
     * const schoolWithSchoolIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { schoolId: true },
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criteria<T extends School$criteriaArgs<ExtArgs> = {}>(args?: Subset<T, School$criteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scholarships<T extends School$scholarshipsArgs<ExtArgs> = {}>(args?: Subset<T, School$scholarshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends School$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, School$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly schoolId: FieldRef<"School", 'Int'>
    readonly schoolName: FieldRef<"School", 'String'>
    readonly state: FieldRef<"School", 'String'>
    readonly city: FieldRef<"School", 'String'>
    readonly institutionalControl: FieldRef<"School", 'String'>
    readonly rank: FieldRef<"School", 'Int'>
    readonly acceptanceRate: FieldRef<"School", 'Decimal'>
    readonly schoolWebsite: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.criteria
   */
  export type School$criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    where?: SchoolCriteriaWhereInput
    orderBy?: SchoolCriteriaOrderByWithRelationInput | SchoolCriteriaOrderByWithRelationInput[]
    cursor?: SchoolCriteriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolCriteriaScalarFieldEnum | SchoolCriteriaScalarFieldEnum[]
  }

  /**
   * School.scholarships
   */
  export type School$scholarshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    where?: ScholarshipsWhereInput
    orderBy?: ScholarshipsOrderByWithRelationInput | ScholarshipsOrderByWithRelationInput[]
    cursor?: ScholarshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScholarshipsScalarFieldEnum | ScholarshipsScalarFieldEnum[]
  }

  /**
   * School.favorites
   */
  export type School$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model SchoolCriteria
   */

  export type AggregateSchoolCriteria = {
    _count: SchoolCriteriaCountAggregateOutputType | null
    _avg: SchoolCriteriaAvgAggregateOutputType | null
    _sum: SchoolCriteriaSumAggregateOutputType | null
    _min: SchoolCriteriaMinAggregateOutputType | null
    _max: SchoolCriteriaMaxAggregateOutputType | null
  }

  export type SchoolCriteriaAvgAggregateOutputType = {
    criteriaId: number | null
    schoolId: number | null
  }

  export type SchoolCriteriaSumAggregateOutputType = {
    criteriaId: number | null
    schoolId: number | null
  }

  export type SchoolCriteriaMinAggregateOutputType = {
    criteriaId: number | null
    graduateLevel: string | null
    offerScholarships: boolean | null
    requiresAppFee: boolean | null
    requiresGre: boolean | null
    schoolId: number | null
  }

  export type SchoolCriteriaMaxAggregateOutputType = {
    criteriaId: number | null
    graduateLevel: string | null
    offerScholarships: boolean | null
    requiresAppFee: boolean | null
    requiresGre: boolean | null
    schoolId: number | null
  }

  export type SchoolCriteriaCountAggregateOutputType = {
    criteriaId: number
    graduateLevel: number
    offerScholarships: number
    requiresAppFee: number
    requiresGre: number
    schoolId: number
    _all: number
  }


  export type SchoolCriteriaAvgAggregateInputType = {
    criteriaId?: true
    schoolId?: true
  }

  export type SchoolCriteriaSumAggregateInputType = {
    criteriaId?: true
    schoolId?: true
  }

  export type SchoolCriteriaMinAggregateInputType = {
    criteriaId?: true
    graduateLevel?: true
    offerScholarships?: true
    requiresAppFee?: true
    requiresGre?: true
    schoolId?: true
  }

  export type SchoolCriteriaMaxAggregateInputType = {
    criteriaId?: true
    graduateLevel?: true
    offerScholarships?: true
    requiresAppFee?: true
    requiresGre?: true
    schoolId?: true
  }

  export type SchoolCriteriaCountAggregateInputType = {
    criteriaId?: true
    graduateLevel?: true
    offerScholarships?: true
    requiresAppFee?: true
    requiresGre?: true
    schoolId?: true
    _all?: true
  }

  export type SchoolCriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolCriteria to aggregate.
     */
    where?: SchoolCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolCriteria to fetch.
     */
    orderBy?: SchoolCriteriaOrderByWithRelationInput | SchoolCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolCriteria
    **/
    _count?: true | SchoolCriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolCriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolCriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolCriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolCriteriaMaxAggregateInputType
  }

  export type GetSchoolCriteriaAggregateType<T extends SchoolCriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolCriteria[P]>
      : GetScalarType<T[P], AggregateSchoolCriteria[P]>
  }




  export type SchoolCriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolCriteriaWhereInput
    orderBy?: SchoolCriteriaOrderByWithAggregationInput | SchoolCriteriaOrderByWithAggregationInput[]
    by: SchoolCriteriaScalarFieldEnum[] | SchoolCriteriaScalarFieldEnum
    having?: SchoolCriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCriteriaCountAggregateInputType | true
    _avg?: SchoolCriteriaAvgAggregateInputType
    _sum?: SchoolCriteriaSumAggregateInputType
    _min?: SchoolCriteriaMinAggregateInputType
    _max?: SchoolCriteriaMaxAggregateInputType
  }

  export type SchoolCriteriaGroupByOutputType = {
    criteriaId: number
    graduateLevel: string
    offerScholarships: boolean
    requiresAppFee: boolean
    requiresGre: boolean
    schoolId: number
    _count: SchoolCriteriaCountAggregateOutputType | null
    _avg: SchoolCriteriaAvgAggregateOutputType | null
    _sum: SchoolCriteriaSumAggregateOutputType | null
    _min: SchoolCriteriaMinAggregateOutputType | null
    _max: SchoolCriteriaMaxAggregateOutputType | null
  }

  type GetSchoolCriteriaGroupByPayload<T extends SchoolCriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolCriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolCriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolCriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolCriteriaGroupByOutputType[P]>
        }
      >
    >


  export type SchoolCriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    graduateLevel?: boolean
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId?: boolean
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolCriteria"]>

  export type SchoolCriteriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    graduateLevel?: boolean
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId?: boolean
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolCriteria"]>

  export type SchoolCriteriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    graduateLevel?: boolean
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId?: boolean
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolCriteria"]>

  export type SchoolCriteriaSelectScalar = {
    criteriaId?: boolean
    graduateLevel?: boolean
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId?: boolean
  }

  export type SchoolCriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"criteriaId" | "graduateLevel" | "offerScholarships" | "requiresAppFee" | "requiresGre" | "schoolId", ExtArgs["result"]["schoolCriteria"]>
  export type SchoolCriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolCriteriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolCriteriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchoolCriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolCriteria"
    objects: {
      Schools: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      criteriaId: number
      graduateLevel: string
      offerScholarships: boolean
      requiresAppFee: boolean
      requiresGre: boolean
      schoolId: number
    }, ExtArgs["result"]["schoolCriteria"]>
    composites: {}
  }

  type SchoolCriteriaGetPayload<S extends boolean | null | undefined | SchoolCriteriaDefaultArgs> = $Result.GetResult<Prisma.$SchoolCriteriaPayload, S>

  type SchoolCriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolCriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCriteriaCountAggregateInputType | true
    }

  export interface SchoolCriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolCriteria'], meta: { name: 'SchoolCriteria' } }
    /**
     * Find zero or one SchoolCriteria that matches the filter.
     * @param {SchoolCriteriaFindUniqueArgs} args - Arguments to find a SchoolCriteria
     * @example
     * // Get one SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolCriteriaFindUniqueArgs>(args: SelectSubset<T, SchoolCriteriaFindUniqueArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolCriteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolCriteriaFindUniqueOrThrowArgs} args - Arguments to find a SchoolCriteria
     * @example
     * // Get one SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolCriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolCriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaFindFirstArgs} args - Arguments to find a SchoolCriteria
     * @example
     * // Get one SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolCriteriaFindFirstArgs>(args?: SelectSubset<T, SchoolCriteriaFindFirstArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolCriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaFindFirstOrThrowArgs} args - Arguments to find a SchoolCriteria
     * @example
     * // Get one SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolCriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolCriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findMany()
     * 
     * // Get first 10 SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.findMany({ take: 10 })
     * 
     * // Only select the `criteriaId`
     * const schoolCriteriaWithCriteriaIdOnly = await prisma.schoolCriteria.findMany({ select: { criteriaId: true } })
     * 
     */
    findMany<T extends SchoolCriteriaFindManyArgs>(args?: SelectSubset<T, SchoolCriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolCriteria.
     * @param {SchoolCriteriaCreateArgs} args - Arguments to create a SchoolCriteria.
     * @example
     * // Create one SchoolCriteria
     * const SchoolCriteria = await prisma.schoolCriteria.create({
     *   data: {
     *     // ... data to create a SchoolCriteria
     *   }
     * })
     * 
     */
    create<T extends SchoolCriteriaCreateArgs>(args: SelectSubset<T, SchoolCriteriaCreateArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolCriteria.
     * @param {SchoolCriteriaCreateManyArgs} args - Arguments to create many SchoolCriteria.
     * @example
     * // Create many SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCriteriaCreateManyArgs>(args?: SelectSubset<T, SchoolCriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolCriteria and returns the data saved in the database.
     * @param {SchoolCriteriaCreateManyAndReturnArgs} args - Arguments to create many SchoolCriteria.
     * @example
     * // Create many SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolCriteria and only return the `criteriaId`
     * const schoolCriteriaWithCriteriaIdOnly = await prisma.schoolCriteria.createManyAndReturn({
     *   select: { criteriaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCriteriaCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCriteriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolCriteria.
     * @param {SchoolCriteriaDeleteArgs} args - Arguments to delete one SchoolCriteria.
     * @example
     * // Delete one SchoolCriteria
     * const SchoolCriteria = await prisma.schoolCriteria.delete({
     *   where: {
     *     // ... filter to delete one SchoolCriteria
     *   }
     * })
     * 
     */
    delete<T extends SchoolCriteriaDeleteArgs>(args: SelectSubset<T, SchoolCriteriaDeleteArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolCriteria.
     * @param {SchoolCriteriaUpdateArgs} args - Arguments to update one SchoolCriteria.
     * @example
     * // Update one SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolCriteriaUpdateArgs>(args: SelectSubset<T, SchoolCriteriaUpdateArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolCriteria.
     * @param {SchoolCriteriaDeleteManyArgs} args - Arguments to filter SchoolCriteria to delete.
     * @example
     * // Delete a few SchoolCriteria
     * const { count } = await prisma.schoolCriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolCriteriaDeleteManyArgs>(args?: SelectSubset<T, SchoolCriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolCriteriaUpdateManyArgs>(args: SelectSubset<T, SchoolCriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolCriteria and returns the data updated in the database.
     * @param {SchoolCriteriaUpdateManyAndReturnArgs} args - Arguments to update many SchoolCriteria.
     * @example
     * // Update many SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolCriteria and only return the `criteriaId`
     * const schoolCriteriaWithCriteriaIdOnly = await prisma.schoolCriteria.updateManyAndReturn({
     *   select: { criteriaId: true },
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
    updateManyAndReturn<T extends SchoolCriteriaUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolCriteriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolCriteria.
     * @param {SchoolCriteriaUpsertArgs} args - Arguments to update or create a SchoolCriteria.
     * @example
     * // Update or create a SchoolCriteria
     * const schoolCriteria = await prisma.schoolCriteria.upsert({
     *   create: {
     *     // ... data to create a SchoolCriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolCriteria we want to update
     *   }
     * })
     */
    upsert<T extends SchoolCriteriaUpsertArgs>(args: SelectSubset<T, SchoolCriteriaUpsertArgs<ExtArgs>>): Prisma__SchoolCriteriaClient<$Result.GetResult<Prisma.$SchoolCriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaCountArgs} args - Arguments to filter SchoolCriteria to count.
     * @example
     * // Count the number of SchoolCriteria
     * const count = await prisma.schoolCriteria.count({
     *   where: {
     *     // ... the filter for the SchoolCriteria we want to count
     *   }
     * })
    **/
    count<T extends SchoolCriteriaCountArgs>(
      args?: Subset<T, SchoolCriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolCriteriaAggregateArgs>(args: Subset<T, SchoolCriteriaAggregateArgs>): Prisma.PrismaPromise<GetSchoolCriteriaAggregateType<T>>

    /**
     * Group by SchoolCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCriteriaGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends SchoolCriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolCriteriaGroupByArgs['orderBy'] }
        : { orderBy?: SchoolCriteriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolCriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolCriteria model
   */
  readonly fields: SchoolCriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolCriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolCriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Schools<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchoolCriteria model
   */
  interface SchoolCriteriaFieldRefs {
    readonly criteriaId: FieldRef<"SchoolCriteria", 'Int'>
    readonly graduateLevel: FieldRef<"SchoolCriteria", 'String'>
    readonly offerScholarships: FieldRef<"SchoolCriteria", 'Boolean'>
    readonly requiresAppFee: FieldRef<"SchoolCriteria", 'Boolean'>
    readonly requiresGre: FieldRef<"SchoolCriteria", 'Boolean'>
    readonly schoolId: FieldRef<"SchoolCriteria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SchoolCriteria findUnique
   */
  export type SchoolCriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SchoolCriteria to fetch.
     */
    where: SchoolCriteriaWhereUniqueInput
  }

  /**
   * SchoolCriteria findUniqueOrThrow
   */
  export type SchoolCriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SchoolCriteria to fetch.
     */
    where: SchoolCriteriaWhereUniqueInput
  }

  /**
   * SchoolCriteria findFirst
   */
  export type SchoolCriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SchoolCriteria to fetch.
     */
    where?: SchoolCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolCriteria to fetch.
     */
    orderBy?: SchoolCriteriaOrderByWithRelationInput | SchoolCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolCriteria.
     */
    cursor?: SchoolCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolCriteria.
     */
    distinct?: SchoolCriteriaScalarFieldEnum | SchoolCriteriaScalarFieldEnum[]
  }

  /**
   * SchoolCriteria findFirstOrThrow
   */
  export type SchoolCriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SchoolCriteria to fetch.
     */
    where?: SchoolCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolCriteria to fetch.
     */
    orderBy?: SchoolCriteriaOrderByWithRelationInput | SchoolCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolCriteria.
     */
    cursor?: SchoolCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolCriteria.
     */
    distinct?: SchoolCriteriaScalarFieldEnum | SchoolCriteriaScalarFieldEnum[]
  }

  /**
   * SchoolCriteria findMany
   */
  export type SchoolCriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SchoolCriteria to fetch.
     */
    where?: SchoolCriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolCriteria to fetch.
     */
    orderBy?: SchoolCriteriaOrderByWithRelationInput | SchoolCriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolCriteria.
     */
    cursor?: SchoolCriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolCriteria.
     */
    skip?: number
    distinct?: SchoolCriteriaScalarFieldEnum | SchoolCriteriaScalarFieldEnum[]
  }

  /**
   * SchoolCriteria create
   */
  export type SchoolCriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolCriteria.
     */
    data: XOR<SchoolCriteriaCreateInput, SchoolCriteriaUncheckedCreateInput>
  }

  /**
   * SchoolCriteria createMany
   */
  export type SchoolCriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolCriteria.
     */
    data: SchoolCriteriaCreateManyInput | SchoolCriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolCriteria createManyAndReturn
   */
  export type SchoolCriteriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolCriteria.
     */
    data: SchoolCriteriaCreateManyInput | SchoolCriteriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolCriteria update
   */
  export type SchoolCriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolCriteria.
     */
    data: XOR<SchoolCriteriaUpdateInput, SchoolCriteriaUncheckedUpdateInput>
    /**
     * Choose, which SchoolCriteria to update.
     */
    where: SchoolCriteriaWhereUniqueInput
  }

  /**
   * SchoolCriteria updateMany
   */
  export type SchoolCriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolCriteria.
     */
    data: XOR<SchoolCriteriaUpdateManyMutationInput, SchoolCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which SchoolCriteria to update
     */
    where?: SchoolCriteriaWhereInput
    /**
     * Limit how many SchoolCriteria to update.
     */
    limit?: number
  }

  /**
   * SchoolCriteria updateManyAndReturn
   */
  export type SchoolCriteriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * The data used to update SchoolCriteria.
     */
    data: XOR<SchoolCriteriaUpdateManyMutationInput, SchoolCriteriaUncheckedUpdateManyInput>
    /**
     * Filter which SchoolCriteria to update
     */
    where?: SchoolCriteriaWhereInput
    /**
     * Limit how many SchoolCriteria to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolCriteria upsert
   */
  export type SchoolCriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolCriteria to update in case it exists.
     */
    where: SchoolCriteriaWhereUniqueInput
    /**
     * In case the SchoolCriteria found by the `where` argument doesn't exist, create a new SchoolCriteria with this data.
     */
    create: XOR<SchoolCriteriaCreateInput, SchoolCriteriaUncheckedCreateInput>
    /**
     * In case the SchoolCriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolCriteriaUpdateInput, SchoolCriteriaUncheckedUpdateInput>
  }

  /**
   * SchoolCriteria delete
   */
  export type SchoolCriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
    /**
     * Filter which SchoolCriteria to delete.
     */
    where: SchoolCriteriaWhereUniqueInput
  }

  /**
   * SchoolCriteria deleteMany
   */
  export type SchoolCriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolCriteria to delete
     */
    where?: SchoolCriteriaWhereInput
    /**
     * Limit how many SchoolCriteria to delete.
     */
    limit?: number
  }

  /**
   * SchoolCriteria without action
   */
  export type SchoolCriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCriteria
     */
    select?: SchoolCriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolCriteria
     */
    omit?: SchoolCriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolCriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Scholarships
   */

  export type AggregateScholarships = {
    _count: ScholarshipsCountAggregateOutputType | null
    _avg: ScholarshipsAvgAggregateOutputType | null
    _sum: ScholarshipsSumAggregateOutputType | null
    _min: ScholarshipsMinAggregateOutputType | null
    _max: ScholarshipsMaxAggregateOutputType | null
  }

  export type ScholarshipsAvgAggregateOutputType = {
    schpolarshipId: number | null
    schoolId: number | null
  }

  export type ScholarshipsSumAggregateOutputType = {
    schpolarshipId: number | null
    schoolId: number | null
  }

  export type ScholarshipsMinAggregateOutputType = {
    schpolarshipId: number | null
    name: string | null
    description: string | null
    program: string | null
    degreeLevel: string | null
    schoolId: number | null
  }

  export type ScholarshipsMaxAggregateOutputType = {
    schpolarshipId: number | null
    name: string | null
    description: string | null
    program: string | null
    degreeLevel: string | null
    schoolId: number | null
  }

  export type ScholarshipsCountAggregateOutputType = {
    schpolarshipId: number
    name: number
    description: number
    program: number
    degreeLevel: number
    schoolId: number
    _all: number
  }


  export type ScholarshipsAvgAggregateInputType = {
    schpolarshipId?: true
    schoolId?: true
  }

  export type ScholarshipsSumAggregateInputType = {
    schpolarshipId?: true
    schoolId?: true
  }

  export type ScholarshipsMinAggregateInputType = {
    schpolarshipId?: true
    name?: true
    description?: true
    program?: true
    degreeLevel?: true
    schoolId?: true
  }

  export type ScholarshipsMaxAggregateInputType = {
    schpolarshipId?: true
    name?: true
    description?: true
    program?: true
    degreeLevel?: true
    schoolId?: true
  }

  export type ScholarshipsCountAggregateInputType = {
    schpolarshipId?: true
    name?: true
    description?: true
    program?: true
    degreeLevel?: true
    schoolId?: true
    _all?: true
  }

  export type ScholarshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarships to aggregate.
     */
    where?: ScholarshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipsOrderByWithRelationInput | ScholarshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScholarshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scholarships
    **/
    _count?: true | ScholarshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScholarshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScholarshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScholarshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScholarshipsMaxAggregateInputType
  }

  export type GetScholarshipsAggregateType<T extends ScholarshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateScholarships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScholarships[P]>
      : GetScalarType<T[P], AggregateScholarships[P]>
  }




  export type ScholarshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipsWhereInput
    orderBy?: ScholarshipsOrderByWithAggregationInput | ScholarshipsOrderByWithAggregationInput[]
    by: ScholarshipsScalarFieldEnum[] | ScholarshipsScalarFieldEnum
    having?: ScholarshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScholarshipsCountAggregateInputType | true
    _avg?: ScholarshipsAvgAggregateInputType
    _sum?: ScholarshipsSumAggregateInputType
    _min?: ScholarshipsMinAggregateInputType
    _max?: ScholarshipsMaxAggregateInputType
  }

  export type ScholarshipsGroupByOutputType = {
    schpolarshipId: number
    name: string
    description: string
    program: string
    degreeLevel: string
    schoolId: number
    _count: ScholarshipsCountAggregateOutputType | null
    _avg: ScholarshipsAvgAggregateOutputType | null
    _sum: ScholarshipsSumAggregateOutputType | null
    _min: ScholarshipsMinAggregateOutputType | null
    _max: ScholarshipsMaxAggregateOutputType | null
  }

  type GetScholarshipsGroupByPayload<T extends ScholarshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScholarshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScholarshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScholarshipsGroupByOutputType[P]>
            : GetScalarType<T[P], ScholarshipsGroupByOutputType[P]>
        }
      >
    >


  export type ScholarshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schpolarshipId?: boolean
    name?: boolean
    description?: boolean
    program?: boolean
    degreeLevel?: boolean
    schoolId?: boolean
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarships"]>

  export type ScholarshipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schpolarshipId?: boolean
    name?: boolean
    description?: boolean
    program?: boolean
    degreeLevel?: boolean
    schoolId?: boolean
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarships"]>

  export type ScholarshipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    schpolarshipId?: boolean
    name?: boolean
    description?: boolean
    program?: boolean
    degreeLevel?: boolean
    schoolId?: boolean
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarships"]>

  export type ScholarshipsSelectScalar = {
    schpolarshipId?: boolean
    name?: boolean
    description?: boolean
    program?: boolean
    degreeLevel?: boolean
    schoolId?: boolean
  }

  export type ScholarshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"schpolarshipId" | "name" | "description" | "program" | "degreeLevel" | "schoolId", ExtArgs["result"]["scholarships"]>
  export type ScholarshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ScholarshipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ScholarshipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $ScholarshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scholarships"
    objects: {
      schools: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      schpolarshipId: number
      name: string
      description: string
      program: string
      degreeLevel: string
      schoolId: number
    }, ExtArgs["result"]["scholarships"]>
    composites: {}
  }

  type ScholarshipsGetPayload<S extends boolean | null | undefined | ScholarshipsDefaultArgs> = $Result.GetResult<Prisma.$ScholarshipsPayload, S>

  type ScholarshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScholarshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScholarshipsCountAggregateInputType | true
    }

  export interface ScholarshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scholarships'], meta: { name: 'Scholarships' } }
    /**
     * Find zero or one Scholarships that matches the filter.
     * @param {ScholarshipsFindUniqueArgs} args - Arguments to find a Scholarships
     * @example
     * // Get one Scholarships
     * const scholarships = await prisma.scholarships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScholarshipsFindUniqueArgs>(args: SelectSubset<T, ScholarshipsFindUniqueArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scholarships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScholarshipsFindUniqueOrThrowArgs} args - Arguments to find a Scholarships
     * @example
     * // Get one Scholarships
     * const scholarships = await prisma.scholarships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScholarshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, ScholarshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsFindFirstArgs} args - Arguments to find a Scholarships
     * @example
     * // Get one Scholarships
     * const scholarships = await prisma.scholarships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScholarshipsFindFirstArgs>(args?: SelectSubset<T, ScholarshipsFindFirstArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsFindFirstOrThrowArgs} args - Arguments to find a Scholarships
     * @example
     * // Get one Scholarships
     * const scholarships = await prisma.scholarships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScholarshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, ScholarshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scholarships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scholarships
     * const scholarships = await prisma.scholarships.findMany()
     * 
     * // Get first 10 Scholarships
     * const scholarships = await prisma.scholarships.findMany({ take: 10 })
     * 
     * // Only select the `schpolarshipId`
     * const scholarshipsWithSchpolarshipIdOnly = await prisma.scholarships.findMany({ select: { schpolarshipId: true } })
     * 
     */
    findMany<T extends ScholarshipsFindManyArgs>(args?: SelectSubset<T, ScholarshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scholarships.
     * @param {ScholarshipsCreateArgs} args - Arguments to create a Scholarships.
     * @example
     * // Create one Scholarships
     * const Scholarships = await prisma.scholarships.create({
     *   data: {
     *     // ... data to create a Scholarships
     *   }
     * })
     * 
     */
    create<T extends ScholarshipsCreateArgs>(args: SelectSubset<T, ScholarshipsCreateArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scholarships.
     * @param {ScholarshipsCreateManyArgs} args - Arguments to create many Scholarships.
     * @example
     * // Create many Scholarships
     * const scholarships = await prisma.scholarships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScholarshipsCreateManyArgs>(args?: SelectSubset<T, ScholarshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scholarships and returns the data saved in the database.
     * @param {ScholarshipsCreateManyAndReturnArgs} args - Arguments to create many Scholarships.
     * @example
     * // Create many Scholarships
     * const scholarships = await prisma.scholarships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scholarships and only return the `schpolarshipId`
     * const scholarshipsWithSchpolarshipIdOnly = await prisma.scholarships.createManyAndReturn({
     *   select: { schpolarshipId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScholarshipsCreateManyAndReturnArgs>(args?: SelectSubset<T, ScholarshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scholarships.
     * @param {ScholarshipsDeleteArgs} args - Arguments to delete one Scholarships.
     * @example
     * // Delete one Scholarships
     * const Scholarships = await prisma.scholarships.delete({
     *   where: {
     *     // ... filter to delete one Scholarships
     *   }
     * })
     * 
     */
    delete<T extends ScholarshipsDeleteArgs>(args: SelectSubset<T, ScholarshipsDeleteArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scholarships.
     * @param {ScholarshipsUpdateArgs} args - Arguments to update one Scholarships.
     * @example
     * // Update one Scholarships
     * const scholarships = await prisma.scholarships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScholarshipsUpdateArgs>(args: SelectSubset<T, ScholarshipsUpdateArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scholarships.
     * @param {ScholarshipsDeleteManyArgs} args - Arguments to filter Scholarships to delete.
     * @example
     * // Delete a few Scholarships
     * const { count } = await prisma.scholarships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScholarshipsDeleteManyArgs>(args?: SelectSubset<T, ScholarshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scholarships
     * const scholarships = await prisma.scholarships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScholarshipsUpdateManyArgs>(args: SelectSubset<T, ScholarshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships and returns the data updated in the database.
     * @param {ScholarshipsUpdateManyAndReturnArgs} args - Arguments to update many Scholarships.
     * @example
     * // Update many Scholarships
     * const scholarships = await prisma.scholarships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scholarships and only return the `schpolarshipId`
     * const scholarshipsWithSchpolarshipIdOnly = await prisma.scholarships.updateManyAndReturn({
     *   select: { schpolarshipId: true },
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
    updateManyAndReturn<T extends ScholarshipsUpdateManyAndReturnArgs>(args: SelectSubset<T, ScholarshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scholarships.
     * @param {ScholarshipsUpsertArgs} args - Arguments to update or create a Scholarships.
     * @example
     * // Update or create a Scholarships
     * const scholarships = await prisma.scholarships.upsert({
     *   create: {
     *     // ... data to create a Scholarships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scholarships we want to update
     *   }
     * })
     */
    upsert<T extends ScholarshipsUpsertArgs>(args: SelectSubset<T, ScholarshipsUpsertArgs<ExtArgs>>): Prisma__ScholarshipsClient<$Result.GetResult<Prisma.$ScholarshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsCountArgs} args - Arguments to filter Scholarships to count.
     * @example
     * // Count the number of Scholarships
     * const count = await prisma.scholarships.count({
     *   where: {
     *     // ... the filter for the Scholarships we want to count
     *   }
     * })
    **/
    count<T extends ScholarshipsCountArgs>(
      args?: Subset<T, ScholarshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScholarshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScholarshipsAggregateArgs>(args: Subset<T, ScholarshipsAggregateArgs>): Prisma.PrismaPromise<GetScholarshipsAggregateType<T>>

    /**
     * Group by Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipsGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ScholarshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScholarshipsGroupByArgs['orderBy'] }
        : { orderBy?: ScholarshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScholarshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScholarshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scholarships model
   */
  readonly fields: ScholarshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scholarships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScholarshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scholarships model
   */
  interface ScholarshipsFieldRefs {
    readonly schpolarshipId: FieldRef<"Scholarships", 'Int'>
    readonly name: FieldRef<"Scholarships", 'String'>
    readonly description: FieldRef<"Scholarships", 'String'>
    readonly program: FieldRef<"Scholarships", 'String'>
    readonly degreeLevel: FieldRef<"Scholarships", 'String'>
    readonly schoolId: FieldRef<"Scholarships", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scholarships findUnique
   */
  export type ScholarshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where: ScholarshipsWhereUniqueInput
  }

  /**
   * Scholarships findUniqueOrThrow
   */
  export type ScholarshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where: ScholarshipsWhereUniqueInput
  }

  /**
   * Scholarships findFirst
   */
  export type ScholarshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where?: ScholarshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipsOrderByWithRelationInput | ScholarshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipsScalarFieldEnum | ScholarshipsScalarFieldEnum[]
  }

  /**
   * Scholarships findFirstOrThrow
   */
  export type ScholarshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where?: ScholarshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipsOrderByWithRelationInput | ScholarshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipsScalarFieldEnum | ScholarshipsScalarFieldEnum[]
  }

  /**
   * Scholarships findMany
   */
  export type ScholarshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where?: ScholarshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipsOrderByWithRelationInput | ScholarshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scholarships.
     */
    cursor?: ScholarshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    distinct?: ScholarshipsScalarFieldEnum | ScholarshipsScalarFieldEnum[]
  }

  /**
   * Scholarships create
   */
  export type ScholarshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a Scholarships.
     */
    data: XOR<ScholarshipsCreateInput, ScholarshipsUncheckedCreateInput>
  }

  /**
   * Scholarships createMany
   */
  export type ScholarshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scholarships.
     */
    data: ScholarshipsCreateManyInput | ScholarshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scholarships createManyAndReturn
   */
  export type ScholarshipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * The data used to create many Scholarships.
     */
    data: ScholarshipsCreateManyInput | ScholarshipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scholarships update
   */
  export type ScholarshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a Scholarships.
     */
    data: XOR<ScholarshipsUpdateInput, ScholarshipsUncheckedUpdateInput>
    /**
     * Choose, which Scholarships to update.
     */
    where: ScholarshipsWhereUniqueInput
  }

  /**
   * Scholarships updateMany
   */
  export type ScholarshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scholarships.
     */
    data: XOR<ScholarshipsUpdateManyMutationInput, ScholarshipsUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     */
    where?: ScholarshipsWhereInput
    /**
     * Limit how many Scholarships to update.
     */
    limit?: number
  }

  /**
   * Scholarships updateManyAndReturn
   */
  export type ScholarshipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * The data used to update Scholarships.
     */
    data: XOR<ScholarshipsUpdateManyMutationInput, ScholarshipsUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     */
    where?: ScholarshipsWhereInput
    /**
     * Limit how many Scholarships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scholarships upsert
   */
  export type ScholarshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the Scholarships to update in case it exists.
     */
    where: ScholarshipsWhereUniqueInput
    /**
     * In case the Scholarships found by the `where` argument doesn't exist, create a new Scholarships with this data.
     */
    create: XOR<ScholarshipsCreateInput, ScholarshipsUncheckedCreateInput>
    /**
     * In case the Scholarships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScholarshipsUpdateInput, ScholarshipsUncheckedUpdateInput>
  }

  /**
   * Scholarships delete
   */
  export type ScholarshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
    /**
     * Filter which Scholarships to delete.
     */
    where: ScholarshipsWhereUniqueInput
  }

  /**
   * Scholarships deleteMany
   */
  export type ScholarshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarships to delete
     */
    where?: ScholarshipsWhereInput
    /**
     * Limit how many Scholarships to delete.
     */
    limit?: number
  }

  /**
   * Scholarships without action
   */
  export type ScholarshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarships
     */
    select?: ScholarshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarships
     */
    omit?: ScholarshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipsInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    schoolId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    schoolId: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    schoolId: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    schoolId: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    schoolId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    schoolId?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    userId: string
    schoolId: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    schoolId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    schoolId?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "schoolId", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      schoolId: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly schoolId: FieldRef<"Favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    fullname: 'fullname',
    email: 'email',
    nationality: 'nationality'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    schoolId: 'schoolId',
    schoolName: 'schoolName',
    state: 'state',
    city: 'city',
    institutionalControl: 'institutionalControl',
    rank: 'rank',
    acceptanceRate: 'acceptanceRate',
    schoolWebsite: 'schoolWebsite'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SchoolCriteriaScalarFieldEnum: {
    criteriaId: 'criteriaId',
    graduateLevel: 'graduateLevel',
    offerScholarships: 'offerScholarships',
    requiresAppFee: 'requiresAppFee',
    requiresGre: 'requiresGre',
    schoolId: 'schoolId'
  };

  export type SchoolCriteriaScalarFieldEnum = (typeof SchoolCriteriaScalarFieldEnum)[keyof typeof SchoolCriteriaScalarFieldEnum]


  export const ScholarshipsScalarFieldEnum: {
    schpolarshipId: 'schpolarshipId',
    name: 'name',
    description: 'description',
    program: 'program',
    degreeLevel: 'degreeLevel',
    schoolId: 'schoolId'
  };

  export type ScholarshipsScalarFieldEnum = (typeof ScholarshipsScalarFieldEnum)[keyof typeof ScholarshipsScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nationality?: StringNullableFilter<"User"> | string | null
    favorite?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    nationality?: SortOrderInput | SortOrder
    favorite?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    nationality?: StringNullableFilter<"User"> | string | null
    favorite?: FavoriteListRelationFilter
  }, "userId" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    nationality?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nationality?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolId?: IntFilter<"School"> | number
    schoolName?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    institutionalControl?: StringFilter<"School"> | string
    rank?: IntFilter<"School"> | number
    acceptanceRate?: DecimalFilter<"School"> | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFilter<"School"> | string
    criteria?: SchoolCriteriaListRelationFilter
    scholarships?: ScholarshipsListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    schoolId?: SortOrder
    schoolName?: SortOrder
    state?: SortOrder
    city?: SortOrder
    institutionalControl?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
    schoolWebsite?: SortOrder
    criteria?: SchoolCriteriaOrderByRelationAggregateInput
    scholarships?: ScholarshipsOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    schoolId?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    schoolName?: StringFilter<"School"> | string
    state?: StringFilter<"School"> | string
    city?: StringFilter<"School"> | string
    institutionalControl?: StringFilter<"School"> | string
    rank?: IntFilter<"School"> | number
    acceptanceRate?: DecimalFilter<"School"> | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFilter<"School"> | string
    criteria?: SchoolCriteriaListRelationFilter
    scholarships?: ScholarshipsListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "schoolId">

  export type SchoolOrderByWithAggregationInput = {
    schoolId?: SortOrder
    schoolName?: SortOrder
    state?: SortOrder
    city?: SortOrder
    institutionalControl?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
    schoolWebsite?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    schoolId?: IntWithAggregatesFilter<"School"> | number
    schoolName?: StringWithAggregatesFilter<"School"> | string
    state?: StringWithAggregatesFilter<"School"> | string
    city?: StringWithAggregatesFilter<"School"> | string
    institutionalControl?: StringWithAggregatesFilter<"School"> | string
    rank?: IntWithAggregatesFilter<"School"> | number
    acceptanceRate?: DecimalWithAggregatesFilter<"School"> | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringWithAggregatesFilter<"School"> | string
  }

  export type SchoolCriteriaWhereInput = {
    AND?: SchoolCriteriaWhereInput | SchoolCriteriaWhereInput[]
    OR?: SchoolCriteriaWhereInput[]
    NOT?: SchoolCriteriaWhereInput | SchoolCriteriaWhereInput[]
    criteriaId?: IntFilter<"SchoolCriteria"> | number
    graduateLevel?: StringFilter<"SchoolCriteria"> | string
    offerScholarships?: BoolFilter<"SchoolCriteria"> | boolean
    requiresAppFee?: BoolFilter<"SchoolCriteria"> | boolean
    requiresGre?: BoolFilter<"SchoolCriteria"> | boolean
    schoolId?: IntFilter<"SchoolCriteria"> | number
    Schools?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type SchoolCriteriaOrderByWithRelationInput = {
    criteriaId?: SortOrder
    graduateLevel?: SortOrder
    offerScholarships?: SortOrder
    requiresAppFee?: SortOrder
    requiresGre?: SortOrder
    schoolId?: SortOrder
    Schools?: SchoolOrderByWithRelationInput
  }

  export type SchoolCriteriaWhereUniqueInput = Prisma.AtLeast<{
    criteriaId?: number
    AND?: SchoolCriteriaWhereInput | SchoolCriteriaWhereInput[]
    OR?: SchoolCriteriaWhereInput[]
    NOT?: SchoolCriteriaWhereInput | SchoolCriteriaWhereInput[]
    graduateLevel?: StringFilter<"SchoolCriteria"> | string
    offerScholarships?: BoolFilter<"SchoolCriteria"> | boolean
    requiresAppFee?: BoolFilter<"SchoolCriteria"> | boolean
    requiresGre?: BoolFilter<"SchoolCriteria"> | boolean
    schoolId?: IntFilter<"SchoolCriteria"> | number
    Schools?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "criteriaId">

  export type SchoolCriteriaOrderByWithAggregationInput = {
    criteriaId?: SortOrder
    graduateLevel?: SortOrder
    offerScholarships?: SortOrder
    requiresAppFee?: SortOrder
    requiresGre?: SortOrder
    schoolId?: SortOrder
    _count?: SchoolCriteriaCountOrderByAggregateInput
    _avg?: SchoolCriteriaAvgOrderByAggregateInput
    _max?: SchoolCriteriaMaxOrderByAggregateInput
    _min?: SchoolCriteriaMinOrderByAggregateInput
    _sum?: SchoolCriteriaSumOrderByAggregateInput
  }

  export type SchoolCriteriaScalarWhereWithAggregatesInput = {
    AND?: SchoolCriteriaScalarWhereWithAggregatesInput | SchoolCriteriaScalarWhereWithAggregatesInput[]
    OR?: SchoolCriteriaScalarWhereWithAggregatesInput[]
    NOT?: SchoolCriteriaScalarWhereWithAggregatesInput | SchoolCriteriaScalarWhereWithAggregatesInput[]
    criteriaId?: IntWithAggregatesFilter<"SchoolCriteria"> | number
    graduateLevel?: StringWithAggregatesFilter<"SchoolCriteria"> | string
    offerScholarships?: BoolWithAggregatesFilter<"SchoolCriteria"> | boolean
    requiresAppFee?: BoolWithAggregatesFilter<"SchoolCriteria"> | boolean
    requiresGre?: BoolWithAggregatesFilter<"SchoolCriteria"> | boolean
    schoolId?: IntWithAggregatesFilter<"SchoolCriteria"> | number
  }

  export type ScholarshipsWhereInput = {
    AND?: ScholarshipsWhereInput | ScholarshipsWhereInput[]
    OR?: ScholarshipsWhereInput[]
    NOT?: ScholarshipsWhereInput | ScholarshipsWhereInput[]
    schpolarshipId?: IntFilter<"Scholarships"> | number
    name?: StringFilter<"Scholarships"> | string
    description?: StringFilter<"Scholarships"> | string
    program?: StringFilter<"Scholarships"> | string
    degreeLevel?: StringFilter<"Scholarships"> | string
    schoolId?: IntFilter<"Scholarships"> | number
    schools?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type ScholarshipsOrderByWithRelationInput = {
    schpolarshipId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    program?: SortOrder
    degreeLevel?: SortOrder
    schoolId?: SortOrder
    schools?: SchoolOrderByWithRelationInput
  }

  export type ScholarshipsWhereUniqueInput = Prisma.AtLeast<{
    schpolarshipId?: number
    AND?: ScholarshipsWhereInput | ScholarshipsWhereInput[]
    OR?: ScholarshipsWhereInput[]
    NOT?: ScholarshipsWhereInput | ScholarshipsWhereInput[]
    name?: StringFilter<"Scholarships"> | string
    description?: StringFilter<"Scholarships"> | string
    program?: StringFilter<"Scholarships"> | string
    degreeLevel?: StringFilter<"Scholarships"> | string
    schoolId?: IntFilter<"Scholarships"> | number
    schools?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "schpolarshipId">

  export type ScholarshipsOrderByWithAggregationInput = {
    schpolarshipId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    program?: SortOrder
    degreeLevel?: SortOrder
    schoolId?: SortOrder
    _count?: ScholarshipsCountOrderByAggregateInput
    _avg?: ScholarshipsAvgOrderByAggregateInput
    _max?: ScholarshipsMaxOrderByAggregateInput
    _min?: ScholarshipsMinOrderByAggregateInput
    _sum?: ScholarshipsSumOrderByAggregateInput
  }

  export type ScholarshipsScalarWhereWithAggregatesInput = {
    AND?: ScholarshipsScalarWhereWithAggregatesInput | ScholarshipsScalarWhereWithAggregatesInput[]
    OR?: ScholarshipsScalarWhereWithAggregatesInput[]
    NOT?: ScholarshipsScalarWhereWithAggregatesInput | ScholarshipsScalarWhereWithAggregatesInput[]
    schpolarshipId?: IntWithAggregatesFilter<"Scholarships"> | number
    name?: StringWithAggregatesFilter<"Scholarships"> | string
    description?: StringWithAggregatesFilter<"Scholarships"> | string
    program?: StringWithAggregatesFilter<"Scholarships"> | string
    degreeLevel?: StringWithAggregatesFilter<"Scholarships"> | string
    schoolId?: IntWithAggregatesFilter<"Scholarships"> | number
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringFilter<"Favorite"> | string
    schoolId?: IntFilter<"Favorite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    user?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    schoolId?: IntFilter<"Favorite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    schoolId?: IntWithAggregatesFilter<"Favorite"> | number
  }

  export type UserCreateInput = {
    userId?: string
    username: string
    fullname: string
    email: string
    nationality?: string | null
    favorite?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    username: string
    fullname: string
    email: string
    nationality?: string | null
    favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    favorite?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    username: string
    fullname: string
    email: string
    nationality?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolCreateInput = {
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaCreateNestedManyWithoutSchoolsInput
    scholarships?: ScholarshipsCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    schoolId?: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaUncheckedCreateNestedManyWithoutSchoolsInput
    scholarships?: ScholarshipsUncheckedCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUpdateManyWithoutSchoolsNestedInput
    scholarships?: ScholarshipsUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUncheckedUpdateManyWithoutSchoolsNestedInput
    scholarships?: ScholarshipsUncheckedUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    schoolId?: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
  }

  export type SchoolUpdateManyMutationInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolCriteriaCreateInput = {
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    Schools: SchoolCreateNestedOneWithoutCriteriaInput
  }

  export type SchoolCriteriaUncheckedCreateInput = {
    criteriaId?: number
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId: number
  }

  export type SchoolCriteriaUpdateInput = {
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
    Schools?: SchoolUpdateOneRequiredWithoutCriteriaNestedInput
  }

  export type SchoolCriteriaUncheckedUpdateInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolCriteriaCreateManyInput = {
    criteriaId?: number
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
    schoolId: number
  }

  export type SchoolCriteriaUpdateManyMutationInput = {
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchoolCriteriaUncheckedUpdateManyInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type ScholarshipsCreateInput = {
    name: string
    description: string
    program: string
    degreeLevel: string
    schools: SchoolCreateNestedOneWithoutScholarshipsInput
  }

  export type ScholarshipsUncheckedCreateInput = {
    schpolarshipId?: number
    name: string
    description: string
    program: string
    degreeLevel: string
    schoolId: number
  }

  export type ScholarshipsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
    schools?: SchoolUpdateOneRequiredWithoutScholarshipsNestedInput
  }

  export type ScholarshipsUncheckedUpdateInput = {
    schpolarshipId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type ScholarshipsCreateManyInput = {
    schpolarshipId?: number
    name: string
    description: string
    program: string
    degreeLevel: string
    schoolId: number
  }

  export type ScholarshipsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipsUncheckedUpdateManyInput = {
    schpolarshipId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateInput = {
    user: UserCreateNestedOneWithoutFavoriteInput
    school: SchoolCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    userId: string
    schoolId: number
  }

  export type FavoriteUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
    school?: SchoolUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateManyInput = {
    id?: number
    userId: string
    schoolId: number
  }

  export type FavoriteUpdateManyMutationInput = {

  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    nationality?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    nationality?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    nationality?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SchoolCriteriaListRelationFilter = {
    every?: SchoolCriteriaWhereInput
    some?: SchoolCriteriaWhereInput
    none?: SchoolCriteriaWhereInput
  }

  export type ScholarshipsListRelationFilter = {
    every?: ScholarshipsWhereInput
    some?: ScholarshipsWhereInput
    none?: ScholarshipsWhereInput
  }

  export type SchoolCriteriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScholarshipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    schoolId?: SortOrder
    schoolName?: SortOrder
    state?: SortOrder
    city?: SortOrder
    institutionalControl?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
    schoolWebsite?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    schoolId?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    schoolId?: SortOrder
    schoolName?: SortOrder
    state?: SortOrder
    city?: SortOrder
    institutionalControl?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
    schoolWebsite?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    schoolId?: SortOrder
    schoolName?: SortOrder
    state?: SortOrder
    city?: SortOrder
    institutionalControl?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
    schoolWebsite?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    schoolId?: SortOrder
    rank?: SortOrder
    acceptanceRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SchoolCriteriaCountOrderByAggregateInput = {
    criteriaId?: SortOrder
    graduateLevel?: SortOrder
    offerScholarships?: SortOrder
    requiresAppFee?: SortOrder
    requiresGre?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolCriteriaAvgOrderByAggregateInput = {
    criteriaId?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolCriteriaMaxOrderByAggregateInput = {
    criteriaId?: SortOrder
    graduateLevel?: SortOrder
    offerScholarships?: SortOrder
    requiresAppFee?: SortOrder
    requiresGre?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolCriteriaMinOrderByAggregateInput = {
    criteriaId?: SortOrder
    graduateLevel?: SortOrder
    offerScholarships?: SortOrder
    requiresAppFee?: SortOrder
    requiresGre?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolCriteriaSumOrderByAggregateInput = {
    criteriaId?: SortOrder
    schoolId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ScholarshipsCountOrderByAggregateInput = {
    schpolarshipId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    program?: SortOrder
    degreeLevel?: SortOrder
    schoolId?: SortOrder
  }

  export type ScholarshipsAvgOrderByAggregateInput = {
    schpolarshipId?: SortOrder
    schoolId?: SortOrder
  }

  export type ScholarshipsMaxOrderByAggregateInput = {
    schpolarshipId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    program?: SortOrder
    degreeLevel?: SortOrder
    schoolId?: SortOrder
  }

  export type ScholarshipsMinOrderByAggregateInput = {
    schpolarshipId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    program?: SortOrder
    degreeLevel?: SortOrder
    schoolId?: SortOrder
  }

  export type ScholarshipsSumOrderByAggregateInput = {
    schpolarshipId?: SortOrder
    schoolId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    schoolId?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SchoolCriteriaCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput> | SchoolCriteriaCreateWithoutSchoolsInput[] | SchoolCriteriaUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: SchoolCriteriaCreateOrConnectWithoutSchoolsInput | SchoolCriteriaCreateOrConnectWithoutSchoolsInput[]
    createMany?: SchoolCriteriaCreateManySchoolsInputEnvelope
    connect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
  }

  export type ScholarshipsCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput> | ScholarshipsCreateWithoutSchoolsInput[] | ScholarshipsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ScholarshipsCreateOrConnectWithoutSchoolsInput | ScholarshipsCreateOrConnectWithoutSchoolsInput[]
    createMany?: ScholarshipsCreateManySchoolsInputEnvelope
    connect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutSchoolInput = {
    create?: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput> | FavoriteCreateWithoutSchoolInput[] | FavoriteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutSchoolInput | FavoriteCreateOrConnectWithoutSchoolInput[]
    createMany?: FavoriteCreateManySchoolInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type SchoolCriteriaUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput> | SchoolCriteriaCreateWithoutSchoolsInput[] | SchoolCriteriaUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: SchoolCriteriaCreateOrConnectWithoutSchoolsInput | SchoolCriteriaCreateOrConnectWithoutSchoolsInput[]
    createMany?: SchoolCriteriaCreateManySchoolsInputEnvelope
    connect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
  }

  export type ScholarshipsUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput> | ScholarshipsCreateWithoutSchoolsInput[] | ScholarshipsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ScholarshipsCreateOrConnectWithoutSchoolsInput | ScholarshipsCreateOrConnectWithoutSchoolsInput[]
    createMany?: ScholarshipsCreateManySchoolsInputEnvelope
    connect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput> | FavoriteCreateWithoutSchoolInput[] | FavoriteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutSchoolInput | FavoriteCreateOrConnectWithoutSchoolInput[]
    createMany?: FavoriteCreateManySchoolInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SchoolCriteriaUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput> | SchoolCriteriaCreateWithoutSchoolsInput[] | SchoolCriteriaUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: SchoolCriteriaCreateOrConnectWithoutSchoolsInput | SchoolCriteriaCreateOrConnectWithoutSchoolsInput[]
    upsert?: SchoolCriteriaUpsertWithWhereUniqueWithoutSchoolsInput | SchoolCriteriaUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: SchoolCriteriaCreateManySchoolsInputEnvelope
    set?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    disconnect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    delete?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    connect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    update?: SchoolCriteriaUpdateWithWhereUniqueWithoutSchoolsInput | SchoolCriteriaUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: SchoolCriteriaUpdateManyWithWhereWithoutSchoolsInput | SchoolCriteriaUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: SchoolCriteriaScalarWhereInput | SchoolCriteriaScalarWhereInput[]
  }

  export type ScholarshipsUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput> | ScholarshipsCreateWithoutSchoolsInput[] | ScholarshipsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ScholarshipsCreateOrConnectWithoutSchoolsInput | ScholarshipsCreateOrConnectWithoutSchoolsInput[]
    upsert?: ScholarshipsUpsertWithWhereUniqueWithoutSchoolsInput | ScholarshipsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: ScholarshipsCreateManySchoolsInputEnvelope
    set?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    disconnect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    delete?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    connect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    update?: ScholarshipsUpdateWithWhereUniqueWithoutSchoolsInput | ScholarshipsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: ScholarshipsUpdateManyWithWhereWithoutSchoolsInput | ScholarshipsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: ScholarshipsScalarWhereInput | ScholarshipsScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput> | FavoriteCreateWithoutSchoolInput[] | FavoriteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutSchoolInput | FavoriteCreateOrConnectWithoutSchoolInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutSchoolInput | FavoriteUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: FavoriteCreateManySchoolInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutSchoolInput | FavoriteUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutSchoolInput | FavoriteUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SchoolCriteriaUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput> | SchoolCriteriaCreateWithoutSchoolsInput[] | SchoolCriteriaUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: SchoolCriteriaCreateOrConnectWithoutSchoolsInput | SchoolCriteriaCreateOrConnectWithoutSchoolsInput[]
    upsert?: SchoolCriteriaUpsertWithWhereUniqueWithoutSchoolsInput | SchoolCriteriaUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: SchoolCriteriaCreateManySchoolsInputEnvelope
    set?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    disconnect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    delete?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    connect?: SchoolCriteriaWhereUniqueInput | SchoolCriteriaWhereUniqueInput[]
    update?: SchoolCriteriaUpdateWithWhereUniqueWithoutSchoolsInput | SchoolCriteriaUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: SchoolCriteriaUpdateManyWithWhereWithoutSchoolsInput | SchoolCriteriaUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: SchoolCriteriaScalarWhereInput | SchoolCriteriaScalarWhereInput[]
  }

  export type ScholarshipsUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput> | ScholarshipsCreateWithoutSchoolsInput[] | ScholarshipsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: ScholarshipsCreateOrConnectWithoutSchoolsInput | ScholarshipsCreateOrConnectWithoutSchoolsInput[]
    upsert?: ScholarshipsUpsertWithWhereUniqueWithoutSchoolsInput | ScholarshipsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: ScholarshipsCreateManySchoolsInputEnvelope
    set?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    disconnect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    delete?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    connect?: ScholarshipsWhereUniqueInput | ScholarshipsWhereUniqueInput[]
    update?: ScholarshipsUpdateWithWhereUniqueWithoutSchoolsInput | ScholarshipsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: ScholarshipsUpdateManyWithWhereWithoutSchoolsInput | ScholarshipsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: ScholarshipsScalarWhereInput | ScholarshipsScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput> | FavoriteCreateWithoutSchoolInput[] | FavoriteUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutSchoolInput | FavoriteCreateOrConnectWithoutSchoolInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutSchoolInput | FavoriteUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: FavoriteCreateManySchoolInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutSchoolInput | FavoriteUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutSchoolInput | FavoriteUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutCriteriaInput = {
    create?: XOR<SchoolCreateWithoutCriteriaInput, SchoolUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCriteriaInput
    connect?: SchoolWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SchoolUpdateOneRequiredWithoutCriteriaNestedInput = {
    create?: XOR<SchoolCreateWithoutCriteriaInput, SchoolUncheckedCreateWithoutCriteriaInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCriteriaInput
    upsert?: SchoolUpsertWithoutCriteriaInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutCriteriaInput, SchoolUpdateWithoutCriteriaInput>, SchoolUncheckedUpdateWithoutCriteriaInput>
  }

  export type SchoolCreateNestedOneWithoutScholarshipsInput = {
    create?: XOR<SchoolCreateWithoutScholarshipsInput, SchoolUncheckedCreateWithoutScholarshipsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutScholarshipsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutScholarshipsNestedInput = {
    create?: XOR<SchoolCreateWithoutScholarshipsInput, SchoolUncheckedCreateWithoutScholarshipsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutScholarshipsInput
    upsert?: SchoolUpsertWithoutScholarshipsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutScholarshipsInput, SchoolUpdateWithoutScholarshipsInput>, SchoolUncheckedUpdateWithoutScholarshipsInput>
  }

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<SchoolCreateWithoutFavoritesInput, SchoolUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFavoritesInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    upsert?: UserUpsertWithoutFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteInput, UserUpdateWithoutFavoriteInput>, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type SchoolUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<SchoolCreateWithoutFavoritesInput, SchoolUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFavoritesInput
    upsert?: SchoolUpsertWithoutFavoritesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutFavoritesInput, SchoolUpdateWithoutFavoritesInput>, SchoolUncheckedUpdateWithoutFavoritesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavoriteCreateWithoutUserInput = {
    school: SchoolCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    schoolId: number
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringFilter<"Favorite"> | string
    schoolId?: IntFilter<"Favorite"> | number
  }

  export type SchoolCriteriaCreateWithoutSchoolsInput = {
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
  }

  export type SchoolCriteriaUncheckedCreateWithoutSchoolsInput = {
    criteriaId?: number
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
  }

  export type SchoolCriteriaCreateOrConnectWithoutSchoolsInput = {
    where: SchoolCriteriaWhereUniqueInput
    create: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput>
  }

  export type SchoolCriteriaCreateManySchoolsInputEnvelope = {
    data: SchoolCriteriaCreateManySchoolsInput | SchoolCriteriaCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type ScholarshipsCreateWithoutSchoolsInput = {
    name: string
    description: string
    program: string
    degreeLevel: string
  }

  export type ScholarshipsUncheckedCreateWithoutSchoolsInput = {
    schpolarshipId?: number
    name: string
    description: string
    program: string
    degreeLevel: string
  }

  export type ScholarshipsCreateOrConnectWithoutSchoolsInput = {
    where: ScholarshipsWhereUniqueInput
    create: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput>
  }

  export type ScholarshipsCreateManySchoolsInputEnvelope = {
    data: ScholarshipsCreateManySchoolsInput | ScholarshipsCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutSchoolInput = {
    user: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutSchoolInput = {
    id?: number
    userId: string
  }

  export type FavoriteCreateOrConnectWithoutSchoolInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput>
  }

  export type FavoriteCreateManySchoolInputEnvelope = {
    data: FavoriteCreateManySchoolInput | FavoriteCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchoolCriteriaUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: SchoolCriteriaWhereUniqueInput
    update: XOR<SchoolCriteriaUpdateWithoutSchoolsInput, SchoolCriteriaUncheckedUpdateWithoutSchoolsInput>
    create: XOR<SchoolCriteriaCreateWithoutSchoolsInput, SchoolCriteriaUncheckedCreateWithoutSchoolsInput>
  }

  export type SchoolCriteriaUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: SchoolCriteriaWhereUniqueInput
    data: XOR<SchoolCriteriaUpdateWithoutSchoolsInput, SchoolCriteriaUncheckedUpdateWithoutSchoolsInput>
  }

  export type SchoolCriteriaUpdateManyWithWhereWithoutSchoolsInput = {
    where: SchoolCriteriaScalarWhereInput
    data: XOR<SchoolCriteriaUpdateManyMutationInput, SchoolCriteriaUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type SchoolCriteriaScalarWhereInput = {
    AND?: SchoolCriteriaScalarWhereInput | SchoolCriteriaScalarWhereInput[]
    OR?: SchoolCriteriaScalarWhereInput[]
    NOT?: SchoolCriteriaScalarWhereInput | SchoolCriteriaScalarWhereInput[]
    criteriaId?: IntFilter<"SchoolCriteria"> | number
    graduateLevel?: StringFilter<"SchoolCriteria"> | string
    offerScholarships?: BoolFilter<"SchoolCriteria"> | boolean
    requiresAppFee?: BoolFilter<"SchoolCriteria"> | boolean
    requiresGre?: BoolFilter<"SchoolCriteria"> | boolean
    schoolId?: IntFilter<"SchoolCriteria"> | number
  }

  export type ScholarshipsUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: ScholarshipsWhereUniqueInput
    update: XOR<ScholarshipsUpdateWithoutSchoolsInput, ScholarshipsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<ScholarshipsCreateWithoutSchoolsInput, ScholarshipsUncheckedCreateWithoutSchoolsInput>
  }

  export type ScholarshipsUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: ScholarshipsWhereUniqueInput
    data: XOR<ScholarshipsUpdateWithoutSchoolsInput, ScholarshipsUncheckedUpdateWithoutSchoolsInput>
  }

  export type ScholarshipsUpdateManyWithWhereWithoutSchoolsInput = {
    where: ScholarshipsScalarWhereInput
    data: XOR<ScholarshipsUpdateManyMutationInput, ScholarshipsUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type ScholarshipsScalarWhereInput = {
    AND?: ScholarshipsScalarWhereInput | ScholarshipsScalarWhereInput[]
    OR?: ScholarshipsScalarWhereInput[]
    NOT?: ScholarshipsScalarWhereInput | ScholarshipsScalarWhereInput[]
    schpolarshipId?: IntFilter<"Scholarships"> | number
    name?: StringFilter<"Scholarships"> | string
    description?: StringFilter<"Scholarships"> | string
    program?: StringFilter<"Scholarships"> | string
    degreeLevel?: StringFilter<"Scholarships"> | string
    schoolId?: IntFilter<"Scholarships"> | number
  }

  export type FavoriteUpsertWithWhereUniqueWithoutSchoolInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutSchoolInput, FavoriteUncheckedUpdateWithoutSchoolInput>
    create: XOR<FavoriteCreateWithoutSchoolInput, FavoriteUncheckedCreateWithoutSchoolInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutSchoolInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutSchoolInput, FavoriteUncheckedUpdateWithoutSchoolInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutSchoolInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolCreateWithoutCriteriaInput = {
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    scholarships?: ScholarshipsCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutCriteriaInput = {
    schoolId?: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    scholarships?: ScholarshipsUncheckedCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutCriteriaInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutCriteriaInput, SchoolUncheckedCreateWithoutCriteriaInput>
  }

  export type SchoolUpsertWithoutCriteriaInput = {
    update: XOR<SchoolUpdateWithoutCriteriaInput, SchoolUncheckedUpdateWithoutCriteriaInput>
    create: XOR<SchoolCreateWithoutCriteriaInput, SchoolUncheckedCreateWithoutCriteriaInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutCriteriaInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutCriteriaInput, SchoolUncheckedUpdateWithoutCriteriaInput>
  }

  export type SchoolUpdateWithoutCriteriaInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    scholarships?: ScholarshipsUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutCriteriaInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    scholarships?: ScholarshipsUncheckedUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutScholarshipsInput = {
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutScholarshipsInput = {
    schoolId?: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaUncheckedCreateNestedManyWithoutSchoolsInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutScholarshipsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutScholarshipsInput, SchoolUncheckedCreateWithoutScholarshipsInput>
  }

  export type SchoolUpsertWithoutScholarshipsInput = {
    update: XOR<SchoolUpdateWithoutScholarshipsInput, SchoolUncheckedUpdateWithoutScholarshipsInput>
    create: XOR<SchoolCreateWithoutScholarshipsInput, SchoolUncheckedCreateWithoutScholarshipsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutScholarshipsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutScholarshipsInput, SchoolUncheckedUpdateWithoutScholarshipsInput>
  }

  export type SchoolUpdateWithoutScholarshipsInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutScholarshipsInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUncheckedUpdateManyWithoutSchoolsNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserCreateWithoutFavoriteInput = {
    userId?: string
    username: string
    fullname: string
    email: string
    nationality?: string | null
  }

  export type UserUncheckedCreateWithoutFavoriteInput = {
    userId?: string
    username: string
    fullname: string
    email: string
    nationality?: string | null
  }

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
  }

  export type SchoolCreateWithoutFavoritesInput = {
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaCreateNestedManyWithoutSchoolsInput
    scholarships?: ScholarshipsCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateWithoutFavoritesInput = {
    schoolId?: number
    schoolName: string
    state: string
    city: string
    institutionalControl: string
    rank: number
    acceptanceRate: Decimal | DecimalJsLike | number | string
    schoolWebsite: string
    criteria?: SchoolCriteriaUncheckedCreateNestedManyWithoutSchoolsInput
    scholarships?: ScholarshipsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type SchoolCreateOrConnectWithoutFavoritesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutFavoritesInput, SchoolUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateWithoutFavoriteInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolUpsertWithoutFavoritesInput = {
    update: XOR<SchoolUpdateWithoutFavoritesInput, SchoolUncheckedUpdateWithoutFavoritesInput>
    create: XOR<SchoolCreateWithoutFavoritesInput, SchoolUncheckedCreateWithoutFavoritesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutFavoritesInput, SchoolUncheckedUpdateWithoutFavoritesInput>
  }

  export type SchoolUpdateWithoutFavoritesInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUpdateManyWithoutSchoolsNestedInput
    scholarships?: ScholarshipsUpdateManyWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateWithoutFavoritesInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    institutionalControl?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    acceptanceRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    schoolWebsite?: StringFieldUpdateOperationsInput | string
    criteria?: SchoolCriteriaUncheckedUpdateManyWithoutSchoolsNestedInput
    scholarships?: ScholarshipsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type FavoriteCreateManyUserInput = {
    id?: number
    schoolId: number
  }

  export type FavoriteUpdateWithoutUserInput = {
    school?: SchoolUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolCriteriaCreateManySchoolsInput = {
    criteriaId?: number
    graduateLevel?: string
    offerScholarships?: boolean
    requiresAppFee?: boolean
    requiresGre?: boolean
  }

  export type ScholarshipsCreateManySchoolsInput = {
    schpolarshipId?: number
    name: string
    description: string
    program: string
    degreeLevel: string
  }

  export type FavoriteCreateManySchoolInput = {
    id?: number
    userId: string
  }

  export type SchoolCriteriaUpdateWithoutSchoolsInput = {
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchoolCriteriaUncheckedUpdateWithoutSchoolsInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchoolCriteriaUncheckedUpdateManyWithoutSchoolsInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    graduateLevel?: StringFieldUpdateOperationsInput | string
    offerScholarships?: BoolFieldUpdateOperationsInput | boolean
    requiresAppFee?: BoolFieldUpdateOperationsInput | boolean
    requiresGre?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScholarshipsUpdateWithoutSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipsUncheckedUpdateWithoutSchoolsInput = {
    schpolarshipId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
  }

  export type ScholarshipsUncheckedUpdateManyWithoutSchoolsInput = {
    schpolarshipId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    program?: StringFieldUpdateOperationsInput | string
    degreeLevel?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUpdateWithoutSchoolInput = {
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutSchoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}