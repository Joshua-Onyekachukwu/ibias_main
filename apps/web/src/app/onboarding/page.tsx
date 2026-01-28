'use client'

import { useActionState } from 'react'
import { connectStore } from './actions'

const initialState = {
  error: '',
}

export default function Onboarding() {
  const [state, formAction, isPending] = useActionState(connectStore, initialState)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Connect your store
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Connect your e-commerce platform to start analyzing your data.
          </p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
                Platform
              </label>
              <select
                id="platform"
                name="platform"
                required
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm border"
                defaultValue="shopify"
              >
                <option value="shopify">Shopify</option>
                <option value="woocommerce">WooCommerce</option>
              </select>
            </div>

            <div>
              <label htmlFor="store-name" className="block text-sm font-medium text-gray-700">
                Store Name
              </label>
              <input
                id="store-name"
                name="store_name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm border"
                placeholder="My Awesome Store"
              />
            </div>

            <div>
              <label htmlFor="store-url" className="block text-sm font-medium text-gray-700">
                Store URL
              </label>
              <input
                id="store-url"
                name="store_url"
                type="url"
                required
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm border"
                placeholder="https://my-store.myshopify.com"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm text-center">{state.error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative flex w-full justify-center rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
            >
              {isPending ? 'Connecting...' : 'Connect Store'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
