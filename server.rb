database = ENV["FB_DB"]

require 'sinatra'

get '/' do
  @database = database
	erb :index
end
