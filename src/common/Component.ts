import { ComponentOptionsMixin, ComponentOptionsWithoutProps, ComputedOptions, defineComponent, DefineComponent, EmitsOptions, MethodOptions } from 'vue'
import { IonicComponents } from '@/common/IonicComponents'
import { close, play } from 'ionicons/icons'

export function component<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> {
  return defineComponent({
    components: { ...options.components, ...IonicComponents },
    setup() { return { close, play }},
    props: options.props,
    data: options.data,
    watch: options.watch,
    created: options.created,
    computed: options.computed,
    methods: options.methods
  }) as DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>
}
