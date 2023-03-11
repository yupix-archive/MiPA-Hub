<template>
    <div style="padding: 1em;">
        <n-h4 :class="$style.title">
            {{ is_async? 'await': '' }} {{ name }}(
            <span v-for="(_args, index) in args">{{ _args.name }}: {{ _args.type }}{{
                args.length
                    === index + 1 ? '' : ', '
            }}</span>
            {{ kwargs.length > 0 ? '*,' : '' }}
            <span v-for="(_kwargs, index) in kwargs">{{ (_kwargs as any).name }}: {{ (_kwargs as
                any).type
            }}{{
                    kwargs.length ===
                        index + 1 ? '' : ', '
                }}</span>
            ): {{ return_type }}
        </n-h4>
        <div>
            <span>
                <n-h5>{{ $t('api.title.description') }}</n-h5>
                <p>docstr</p>
            </span>
            <span v-if="args.length > 0">
                <n-h5>{{ $t('api.title.parameter') }}</n-h5>
                <ul>
                    <li v-for="(_args, index) in args">{{ _args.name }} ( {{ _args.type }} ) -- docstr</li>
                </ul>
            </span>
            <span>
                <n-h5>{{ $t('api.title.exception') }}</n-h5>
                <p>todo</p>
            </span>
            <span>
                <n-h5>{{ $t('api.title.return_value') }}</n-h5>
                <p>docstr</p>
            </span>
            <span>
                <n-h5>{{ $t('api.title.return_type') }}</n-h5>
                {{ CheckType(return_type) }}
                <!-- <div v-for="_return_type in CheckType(return_type)">
                <a :href="_return_type?.is_external ? `${_return_type.link}` : `#${_return_type?.name}`">
                    {{ _return_type?.name }}
                </a>
                </div> -->
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {CheckType} from "../../utils/checkType";


const props = defineProps<{
    _function: {
        name: string;
        is_async: boolean;
        args: {
            name: string;
            type: string;
        }[];
        kwargs: any;
        return_type: string;
    }
}>()
const { args, is_async, kwargs, name, return_type } = props._function
</script>


<style lang="scss" module>
.title {
    background-color: rgb(247, 247, 247);
}
</style>
