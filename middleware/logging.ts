import { Context, NextFunction } from "grammy";

export function logging(ctx: Context, next: NextFunction) {
    console.log(`Received update: ${ctx.update.update_id}`);
    return next();
}
