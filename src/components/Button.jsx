import { splitProps } from 'solid-js';

function Button(props) {
  const [local, others] = splitProps(props, ['onClick', 'children', 'ariaLabel']);

  return (
    <button
      class="bg-gray-200 text-black py-2 rounded cursor-pointer"
      onClick={local.onClick}
      aria-label={local.ariaLabel}
      {...others}
    >
      {local.children}
    </button>
  );
}

export default Button;