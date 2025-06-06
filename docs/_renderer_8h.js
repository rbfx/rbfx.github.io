var _renderer_8h =
[
    [ "Urho3D::FrameStatistics", "struct_urho3_d_1_1_frame_statistics.html", null ],
    [ "Urho3D::Renderer", "class_urho3_d_1_1_renderer.html", "class_urho3_d_1_1_renderer" ],
    [ "DeferredLightPSVariation", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9ca", [
      [ "DLPS_NONE", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caafc17c35c5f996affdcb64b2abb7792fe", null ],
      [ "DLPS_SPOT", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caabf7cd1a7e5cf607ca7787df582fceb3c", null ],
      [ "DLPS_POINT", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaad070cd578ecf5212f34a480feaa5181", null ],
      [ "DLPS_POINTMASK", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa7b58ee64c6b6f151370533eba4667e6b", null ],
      [ "DLPS_SPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa7dfaf9921ad7d2a8ed240bfa5321f617", null ],
      [ "DLPS_SPOTSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caac674fe28856d749d8feb6147ad95532f", null ],
      [ "DLPS_POINTSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaff56195a84638421fec4059cc8a3c15f", null ],
      [ "DLPS_POINTMASKSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa2f173a66043193414d76ffb8e806979d", null ],
      [ "DLPS_SHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa8025b9580dc61c2d8149880b14e7bcda", null ],
      [ "DLPS_SPOTSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa32868f6fe85607d4740bc877de8e0692", null ],
      [ "DLPS_POINTSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caab68b16aecb152e481b196d644305b983", null ],
      [ "DLPS_POINTMASKSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa398ce2082445a1f86b80c5dc42a16321", null ],
      [ "DLPS_SHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaf4f8d48fa4050abca6a720d2153288ba", null ],
      [ "DLPS_SPOTSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caabd2dafd589c45c57810eb3cf408df508", null ],
      [ "DLPS_POINTSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caac97344ef4bae59420bdc0f3a2cb5f12f", null ],
      [ "DLPS_POINTMASKSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa1bf05c1a3c771e457d07853b158e66aa", null ],
      [ "DLPS_SHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa3055b5e8039c38d8064fa7f7671f953c", null ],
      [ "DLPS_SPOTSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caac969664fcebea6bf42fa1700ed8e056f", null ],
      [ "DLPS_POINTSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa8f8ef391e5e82a78d7088fcc8887e15e", null ],
      [ "DLPS_POINTMASKSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaf463d5300fc733f876b3c8cbc1d556ff", null ],
      [ "DLPS_SHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa3ab9f60d98115fb06704bfc39753fc88", null ],
      [ "DLPS_SPOTSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caad3b4e065e8a87fa1ce2f97165a132f76", null ],
      [ "DLPS_POINTSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa8064707c051a9ccaac4c2a0401457d00", null ],
      [ "DLPS_POINTMASKSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaddbe213ccaf9438148143a3b24e062d6", null ],
      [ "DLPS_ORTHO", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caaf37f10a2ba4aba5a9c542fcd5903d347", null ],
      [ "DLPS_ORTHOSPOT", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caae276625e1043a766c631a68c7339716a", null ],
      [ "DLPS_ORTHOPOINT", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa57eac58b2776e80890fda9ad1ffc3294", null ],
      [ "DLPS_ORTHOPOINTMASK", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa61ce6d0305330c9d42fcb8d1b524558d", null ],
      [ "DLPS_ORTHOSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa33dbada8ac693d2f0d8bde2b508ef061", null ],
      [ "DLPS_ORTHOSPOTSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa20d74e51dcf8ffcba9952287d2aa3651", null ],
      [ "DLPS_ORTHOPOINTSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caac042867af11c489f6b85a162ea281e67", null ],
      [ "DLPS_ORTHOPOINTMASKSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa84c854e69da29aaab3454942e4fb74be", null ],
      [ "DLPS_ORTHOSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa557658f09517281438dc0bf2263c0b67", null ],
      [ "DLPS_ORTHOSPOTSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa2852933e31be424aa1a8d14d6a5b55d7", null ],
      [ "DLPS_ORTHOPOINTSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa08ae47c897a452e27d46935a1af2a17d", null ],
      [ "DLPS_ORTHOPOINTMASKSHADOW", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caab997c879ed58edb6a11b268fd5fb1805", null ],
      [ "DLPS_ORTHOSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa0a311b8395c9cfbe17465ce3cf104b87", null ],
      [ "DLPS_ORTHOSPOTSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caae62e7210df3d2c28490bca003976b2fb", null ],
      [ "DLPS_ORTHOPOINTSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa48438c7e2652ca8b67bc9695dd0f4434", null ],
      [ "DLPS_ORTHOPOINTMASKSHADOWSPEC", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa77ec9ae1b398ac5edacad2bc637edfab", null ],
      [ "DLPS_ORTHOSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa3973c5bb31c434b8dc97be239e640e72", null ],
      [ "DLPS_ORTHOSPOTSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa35ccc9facfea4688d66458d5191ba2cc", null ],
      [ "DLPS_ORTHOPOINTSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa2e5cf0268fe004389a89c14897353d87", null ],
      [ "DLPS_ORTHOPOINTMASKSHADOWNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa276cdf2f168d2edfef770083de7688c0", null ],
      [ "DLPS_ORTHOSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa2026d068a085f7d470fe1e04a201013d", null ],
      [ "DLPS_ORTHOSPOTSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa25ff45c5d6575663cd97914fba89b3b0", null ],
      [ "DLPS_ORTHOPOINTSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa7bd1e04706bdd14147bc998c1419cc0d", null ],
      [ "DLPS_ORTHOPOINTMASKSHADOWSPECNORMALOFFSET", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caa1439c66cccace6d63380359342eaaaf6", null ],
      [ "MAX_DEFERRED_LIGHT_PS_VARIATIONS", "_renderer_8h.html#a0e933fe0bdd1c0f81caf3593d12ed9caad214aabbbd9fb929070ce8a02a65dd60", null ]
    ] ],
    [ "DeferredLightVSVariation", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bd", [
      [ "DLVS_NONE", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bda407118825adbb3f0b0e210df8790fe8a", null ],
      [ "DLVS_DIR", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bdaeacd58bad21293cdcbddf3b30df247e4", null ],
      [ "DLVS_ORTHO", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bdaa961a1938ae0faca2d282f17af42d462", null ],
      [ "DLVS_ORTHODIR", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bdab06d85815ac24c810035245697de98ee", null ],
      [ "MAX_DEFERRED_LIGHT_VS_VARIATIONS", "_renderer_8h.html#a9c4549e090b7c9d7c76b29fc7b24e9bda7625d5c8b5874daa9e386e20774da5ee", null ]
    ] ],
    [ "LightPSVariation", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886", [
      [ "LPS_NONE", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886abc8c006ec987bae500a71ddb241e4e01", null ],
      [ "LPS_SPOT", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a2c39b66f98b1aae4da41ed594f2a453b", null ],
      [ "LPS_POINT", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886ad78127599f992e9a0fdc4e263e44f2be", null ],
      [ "LPS_POINTMASK", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a4f69bf4232ff53110f2d35e69857650c", null ],
      [ "LPS_SPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a52789b197f60f88ffa129a710fda77e9", null ],
      [ "LPS_SPOTSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a079c1cf92e6fb68287c3bb91e8eacae1", null ],
      [ "LPS_POINTSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a709c7a884b2465ff6d2a831306c4c002", null ],
      [ "LPS_POINTMASKSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a25aca9b8f64b76290b90abb7b15643df", null ],
      [ "LPS_SHADOW", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886ac6dfcffe5786040241ef531dcba14e61", null ],
      [ "LPS_SPOTSHADOW", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a9d950b5b0b4367bbbdec5bc554cb54de", null ],
      [ "LPS_POINTSHADOW", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886aa53776c96879a2d85314eaa728bae834", null ],
      [ "LPS_POINTMASKSHADOW", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886ac5b28b6024434f7188f2baa2ea2c55a3", null ],
      [ "LPS_SHADOWSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a09e57bf754d73f56e15bba76f01a4d76", null ],
      [ "LPS_SPOTSHADOWSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886a111bcc6a7ee012e6fb6175a3ed22b410", null ],
      [ "LPS_POINTSHADOWSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886aea2c5da17fdabcc88240c965c98366a2", null ],
      [ "LPS_POINTMASKSHADOWSPEC", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886ae6f55a82894d25960a727ede9dea2b95", null ],
      [ "MAX_LIGHT_PS_VARIATIONS", "_renderer_8h.html#a8f085ae31ea999d55b03c9b9212b3886ac1608223f5865a498eff2e8715ec6198", null ]
    ] ],
    [ "LightVSVariation", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625ef", [
      [ "LVS_DIR", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efa7aa7f8064b62c364c5768e251a02522e", null ],
      [ "LVS_SPOT", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efaf96686e9ea63dcdc009fbf3ce9be3f84", null ],
      [ "LVS_POINT", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efab7f2234ba3f3655ddf8a9d7041c066a8", null ],
      [ "LVS_SHADOW", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efa0eac740feb5e6d6f2e7df8e04b074bdb", null ],
      [ "LVS_SPOTSHADOW", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efaa8bec5f761449338c0f8ede075d8119d", null ],
      [ "LVS_POINTSHADOW", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efad33273ace0e58f2c4726cc36047c8b2d", null ],
      [ "LVS_SHADOWNORMALOFFSET", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efa7c789c31685c12b6ee8ecf99a283442a", null ],
      [ "LVS_SPOTSHADOWNORMALOFFSET", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efac46169f6785ad6166a83e4138d3be095", null ],
      [ "LVS_POINTSHADOWNORMALOFFSET", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efa6f2413ce4a8d8d969580554e9785c322", null ],
      [ "MAX_LIGHT_VS_VARIATIONS", "_renderer_8h.html#a0db04d02d2105da76bc9fba9317625efa81b944f0689646f668b76f2c284f202c", null ]
    ] ],
    [ "SkinningMode", "_renderer_8h.html#a650ff6dcc1d7e89a0e4a1c7932218121", [
      [ "SKINNING_AUTO", "_renderer_8h.html#a650ff6dcc1d7e89a0e4a1c7932218121a64c939b18a1f08ea5b9511790d65eff9", null ],
      [ "SKINNING_HARDWARE", "_renderer_8h.html#a650ff6dcc1d7e89a0e4a1c7932218121a553732d49ae5822115b79ed97b1ce5b2", null ],
      [ "SKINNING_SOFTWARE", "_renderer_8h.html#a650ff6dcc1d7e89a0e4a1c7932218121a3c6b776d053dbde6dea75628a75eef2a", null ]
    ] ],
    [ "VertexLightVSVariation", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3", [
      [ "VLVS_NOLIGHTS", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3af131fa1fe397e8a3cc9294f7b4d83477", null ],
      [ "VLVS_1LIGHT", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3a66f52ab0bb51e4f0c23928893671645f", null ],
      [ "VLVS_2LIGHTS", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3afe7654bbaf614ca51df81a4e38de53aa", null ],
      [ "VLVS_3LIGHTS", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3a5352171da9b9b1856d5c038e3c20fd86", null ],
      [ "VLVS_4LIGHTS", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3abbcc269245fb943a741f58719ccf554e", null ],
      [ "MAX_VERTEXLIGHT_VS_VARIATIONS", "_renderer_8h.html#a80332c536bd66cca2a847452f99565d3a21fbc5858aa91b157bf9f169159e3239", null ]
    ] ]
];