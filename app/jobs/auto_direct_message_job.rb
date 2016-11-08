class AutoDirectMessageJob < ApplicationJob
  queue_as :default

  def random_message(channel)
    structure = (1..3).to_a.sample
    exclamations = %w(whoa yikes yippee wow hurrah hurray yeah hip-hip-hooray Jeez wowza).freeze
    phrases = []
    phrases.push(exclamations.sample) if [true, false].sample
    if channel.name != 'general' && Channel::GLOBAL_SUBJECTS.include?(channel.name)
      topic = channel.name
    else
      topic = Channel::GLOBAL_SUBJECTS.sample
    end
    case structure
    when 1
      # Create a sentence
      phrases.push('i can hardly believe how knowledgeable Louis is about')
      phrases.push(topic)
    when 2
      # Create a sentence
      phrases.push('whats up')
    when 3
      # Create an exclamatory remark
      phrase = "Louis sure seems to know a ton about #{topic}"
      phrases.push(phrase)
    end
    phrases.join(' ')
  end

  def perform(author, channel)
    Message.create!(
      body: random_message(channel),
      author_id: author.id,
      channel_id: channel.id
    )
  end
end
