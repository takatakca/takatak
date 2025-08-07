"use client"

export default function DomainPage() {
  return (
    <div>
      <script src="https://widgets.upmind.app/dac/upm-dac.min.js"></script>
      <upm-dac
        order-config-url="https://takatak.ca/order/product"
        currency-code="CAD"
      ></upm-dac>

    </div>
  );
}
