export let vm = {
  $gettext: (msgid) => msgid,
  $ngettext: (msgid, plural, n) => {
    return n > 1 ? plural : msgid;
  },
  $pgettext: (context, msgid) => msgid,
  $npgettext: (context, msgid) => msgid,
};

export function $gettext(msgid) {
  return vm.$gettext(msgid);
}

export function $ngettext(msgid, plural, n) {
  return vm.$ngettext(msgid, plural, n);
}

export function Mount(Vue, app, router, vuetify) {
  vm = new Vue({
    router,
    vuetify,
    render: (h) => h(app),
  }).$mount("#photoprism");
}
