const envVar = {
  isLocal: Boolean(process.env.NEXT_PUBLIC_IS_LOCAL === "true"),
  emailJSServiceId: process.env.NEXT_PUBLIC_SERVICE_ID || "",
  emailJSTemplateId: process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
  emailJSPubId: process.env.NEXT_PUBLIC_PUB_ID || "",
};

export default envVar;
