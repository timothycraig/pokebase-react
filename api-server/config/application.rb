require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PokeBase
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.assets.enabled = false
    # config.serve_static_files =
    paths['public'] = File.join 'client', 'dist'
  end
end

Rails.application.config.middleware.insert_after(
  ActionDispatch::Static,
  ActionDispatch::Static,
  Rails.root.join("public").to_s,
  Rails.application.config.static_cache_control
)
