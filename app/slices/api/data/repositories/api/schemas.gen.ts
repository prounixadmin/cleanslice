// This file is auto-generated by @hey-api/openapi-ts

export const UploadFileDtoSchema = {
    type: 'object',
    properties: {
        file: {
            type: 'string',
            format: 'binary'
        }
    },
    required: ['file']
} as const;

export const SingleModelSchema = {
    type: 'object',
    properties: {
        success: {
            type: 'boolean',
            example: true
        }
    },
    required: ['success']
} as const;

export const SignedUrlDtoSchema = {
    type: 'object',
    properties: {
        url: {
            type: 'string'
        },
        path: {
            type: 'string'
        }
    },
    required: ['url', 'path']
} as const;

export const FileDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        teamId: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        contentType: {
            type: 'string'
        },
        path: {
            type: 'string'
        },
        url: {
            type: 'string'
        },
        createdAt: {
            format: 'date-time',
            type: 'string'
        },
        updatedAt: {
            format: 'date-time',
            type: 'string'
        }
    },
    required: ['id', 'teamId', 'name', 'contentType', 'path', 'url', 'createdAt', 'updatedAt']
} as const;

export const CreateFileDtoSchema = {
    type: 'object',
    properties: {
        contentType: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        path: {
            type: 'string'
        }
    },
    required: ['contentType', 'name', 'path']
} as const;

export const ListModelSchema = {
    type: 'object',
    properties: {}
} as const;

export const SuccessModelSchema = {
    type: 'object',
    properties: {
        success: {
            type: 'boolean',
            example: true
        }
    },
    required: ['success']
} as const;

export const MetaListDtoSchema = {
    type: 'object',
    properties: {
        total: {
            type: 'number',
            example: 1
        },
        lastPage: {
            type: 'number',
            example: 1
        },
        currentPage: {
            type: 'number',
            example: 1
        },
        perPage: {
            type: 'number',
            example: 20
        },
        prev: {
            type: 'number',
            example: null
        },
        next: {
            type: 'number',
            example: null
        }
    },
    required: ['total', 'lastPage', 'currentPage', 'perPage', 'prev', 'next']
} as const;

export const PaginationModelSchema = {
    type: 'object',
    properties: {
        meta: {
            '$ref': '#/components/schemas/MetaListDto'
        }
    },
    required: ['meta']
} as const;

export const RoleSchema = {
    type: 'string',
    enum: ['user', 'admin']
} as const;

export const UserDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        emailError: {
            type: 'boolean'
        },
        emailErrorDescription: {
            type: 'string'
        },
        verified: {
            type: 'boolean'
        },
        banned: {
            type: 'boolean'
        },
        roles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Role'
            }
        },
        createdAt: {
            format: 'date-time',
            type: 'string'
        },
        updatedAt: {
            format: 'date-time',
            type: 'string'
        }
    },
    required: ['id', 'name', 'email', 'emailError', 'emailErrorDescription', 'verified', 'banned', 'roles', 'createdAt', 'updatedAt']
} as const;

export const CreateUserDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        roles: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['user', 'admin']
            }
        }
    },
    required: ['name', 'email', 'roles']
} as const;

export const UpdateUserDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        roles: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Role'
            }
        }
    },
    required: ['roles']
} as const;

export const LoginUserDtoSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        deviceId: {
            type: 'string'
        }
    },
    required: ['email', 'password', 'deviceId']
} as const;

export const AuthDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        accessToken: {
            type: 'string'
        },
        refreshToken: {
            type: 'string'
        }
    },
    required: ['id', 'accessToken', 'refreshToken']
} as const;

export const RegisterUserDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        deviceId: {
            type: 'string'
        }
    },
    required: ['name', 'email', 'password', 'deviceId']
} as const;

export const BaseErrorDtoSchema = {
    type: 'object',
    properties: {
        statusCode: {
            type: 'number',
            example: 409
        },
        code: {
            type: 'string',
            example: 'USER_ALREADY_EXISTS'
        },
        message: {
            type: 'string',
            example: 'A user with this email already exists.'
        },
        timestamp: {
            type: 'string',
            example: '2024-08-29T12:34:56.789Z'
        },
        path: {
            type: 'string',
            example: '/users/register'
        }
    },
    required: ['statusCode', 'code', 'message', 'timestamp', 'path']
} as const;

export const RefreshTokenDtoSchema = {
    type: 'object',
    properties: {
        token: {
            type: 'string'
        }
    },
    required: ['token']
} as const;

export const ApiKeyDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        teamId: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        secret: {
            type: 'string'
        },
        lastUsedAt: {
            format: 'date-time',
            type: 'string'
        },
        createdAt: {
            format: 'date-time',
            type: 'string'
        },
        updatedAt: {
            format: 'date-time',
            type: 'string'
        }
    },
    required: ['id', 'teamId', 'name', 'secret', 'lastUsedAt', 'createdAt', 'updatedAt']
} as const;

export const CreateApiKeyDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    },
    required: ['name']
} as const;

export const UpdateApiKeyDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    },
    required: ['name']
} as const;

export const TeamDtoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        codename: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        userId: {
            type: 'string'
        },
        user: {
            '$ref': '#/components/schemas/UserDto'
        },
        vectorId: {
            type: 'string'
        },
        vectorTable: {
            type: 'string'
        },
        createdAt: {
            format: 'date-time',
            type: 'string'
        },
        updatedAt: {
            format: 'date-time',
            type: 'string'
        }
    },
    required: ['id', 'codename', 'name', 'userId', 'user', 'vectorId', 'vectorTable', 'createdAt', 'updatedAt']
} as const;

export const CreateTeamDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        codename: {
            type: 'string'
        }
    },
    required: ['name', 'codename']
} as const;

export const UpdateTeamDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        codename: {
            type: 'string'
        }
    },
    required: ['name', 'codename']
} as const;