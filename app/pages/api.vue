<template>
    <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
            <div style="position: fixed;">
                <n-scrollbar style="max-height: 100vh;" id="sidebar">
                    <n-anchor :show-rail="true" :show-background="true" type="block">
                        <div v-for="data in mipac.tree">
                            <n-anchor-link :title="data.name">
                                <n-anchor-link v-for="_class in data.classes" :title="_class.name"
                                    :href="'#' + _class.name + '-class'">
                                </n-anchor-link>
                            </n-anchor-link>
                        </div>
                    </n-anchor>

                </n-scrollbar>

            </div>
        </n-layout-sider>
        <n-layout>
            <n-layout-content content-style="padding: 24px;">

                <div v-for="data in mipac.tree" style="padding-left: 10em; padding-right: 10em;">
                    <div v-for="_class in data.classes">
                        <div class="mipac-class" :id="_class.name + '-class'">
                            <h2 :class="$style.title">class {{ data.name }}.{{ _class.name }}</h2>
                            <n-divider />

                            <n-grid x-gap="12" :cols="2">
                                <n-gi v-if="_class.attributes.length > 0">
                                    <n-h3 style="margin: 0 !important;">Attributes</n-h3>

                                    <n-anchor :show-rail="true" :show-background="true">
                                        <div v-for="_attribute in _class.attributes">
                                            <n-anchor-link
                                                :title="(_attribute.is_property ? '@' : '') + _attribute.name"
                                                href="#Demos" />
                                        </div>
                                    </n-anchor>
                                </n-gi>
                                <n-gi>
                                    <n-h3 v-if="_class.methods.length > 0" style="margin: 0 !important;">Methods</n-h3>
                                    <n-anchor :show-rail="true">

                                        <div v-for="_method in _class.methods">
                                            <n-anchor-link
                                                :title="(_method.is_async ? 'async' : 'def') + ' ' + _method.name"
                                                href="#Demos" />
                                        </div>
                                    </n-anchor>
                                </n-gi>
                            </n-grid>
                            <div v-for="_method in _class.methods">
                                <ShowFunction :_function="_method" />
                            </div>
                        </div>
                    </div>
                    <div v-for="_function in data.functions">
                        <ShowFunction :_function="_function" />
                    </div>
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<style lang="scss" module>
.title {
    background-color: rgb(247, 247, 247);
}
</style>

<script lang="ts" setup>
import mipac from "../../data.json"
import ShowFunction from "../components/api/ShowFunction.vue"


</script>