import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const QueryAndParam = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return { ...req.query, ...req.params };
  },
);
