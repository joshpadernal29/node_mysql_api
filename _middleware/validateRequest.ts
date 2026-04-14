export default validateRequest;

function validateRequest(req:any,next:any,schema:any) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };
    const {error,value} = schema.validate(req.body,options);
    if (options) {
        next(`validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}