require 'data_mapper'

class Message

	include DataMapper::Resource

	property :id, Serial
	property :name, String
	property :cohort, String
	property :comment, Text

end